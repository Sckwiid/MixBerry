// Module pour charger et parser les données CSV
class CSVLoader {
    static async loadSmoothiesFromCSV(csvPath) {
        try {
            const response = await fetch(csvPath);
            const csvText = await response.text();
            return this.parseCSV(csvText);
        } catch (error) {
            console.error('Erreur lors du chargement du CSV:', error);
            return [];
        }
    }

    static parseCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = this.parseCSVLine(lines[0]);
        const smoothies = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const values = this.parseCSVLine(line);
            if (values.length < headers.length) continue;

            const smoothie = {};
            headers.forEach((header, index) => {
                smoothie[header] = values[index] || '';
            });

            // Traitement spécial pour les champs JSON
            smoothie.ingredients = this.parseJSONField(smoothie.ingredients);
            smoothie.directions = this.parseJSONField(smoothie.directions);
            smoothie.NER = this.parseJSONField(smoothie.NER);

            // Conversion en format compatible avec l'application
            const formattedSmoothie = this.formatSmoothieData(smoothie, smoothies.length + 1);
            if (formattedSmoothie) {
                smoothies.push(formattedSmoothie);
            }
        }

        return smoothies;
    }

    static parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        let i = 0;

        while (i < line.length) {
            const char = line[i];
            const nextChar = line[i + 1];

            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    // Double quote - add single quote to result
                    current += '"';
                    i += 2;
                } else {
                    // Toggle quote state
                    inQuotes = !inQuotes;
                    i++;
                }
            } else if (char === ',' && !inQuotes) {
                // End of field
                result.push(current.trim());
                current = '';
                i++;
            } else {
                current += char;
                i++;
            }
        }

        // Add the last field
        result.push(current.trim());
        return result;
    }

    static parseJSONField(field) {
        if (!field || field === '""') return '';
        
        try {
            // Nettoyer le champ et parser le JSON
            const cleaned = field.replace(/^"/, '').replace(/"$/, '');
            const parsed = JSON.parse(cleaned);
            
            if (Array.isArray(parsed)) {
                return parsed.join(', ');
            }
            return parsed;
        } catch (error) {
            // Si ce n'est pas du JSON valide, retourner tel quel
            return field.replace(/^"/, '').replace(/"$/, '');
        }
    }

    static formatSmoothieData(csvSmoothie, id) {
        if (!csvSmoothie.title || csvSmoothie.title === '""') {
            return null;
        }

        // Extraire les ingrédients pour le champ NER
        let nerIngredients = '';
        if (csvSmoothie.NER && csvSmoothie.NER !== '""') {
            nerIngredients = csvSmoothie.NER;
        } else if (csvSmoothie.ingredients) {
            // Extraire les ingrédients principaux du texte
            nerIngredients = this.extractMainIngredients(csvSmoothie.ingredients);
        }

        // Nettoyer les directions
        const cleanedDirections = this.cleanDirections(csvSmoothie.directions);

        return {
            id: id,
            title: csvSmoothie.title.replace(/^"/, '').replace(/"$/, ''),
            ingredients: csvSmoothie.ingredients || '',
            directions: cleanedDirections,
            NER: nerIngredients,
            link: csvSmoothie.link || '',
            source: csvSmoothie.source || 'CSV Import'
        };
    }

    static cleanDirections(directionsText) {
        if (!directionsText) return '';

        // Nettoyer le texte des directions
        let cleaned = directionsText;
        
        // Enlever les guillemets externes
        cleaned = cleaned.replace(/^"/, '').replace(/"$/, '');
        
        // Remplacer les virgules en début de phrase par des points
        cleaned = cleaned.replace(/,\s*([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞ])/g, '. $1');
        
        // Nettoyer les guillemets français et anglais
        cleaned = cleaned.replace(/[«»""]/g, '');
        
        // Enlever les virgules en début de phrase après division
        cleaned = cleaned.replace(/^\s*,\s*/, '');
        
        return cleaned;
    }

    static extractMainIngredients(ingredientsText) {
        if (!ingredientsText) return '';

        // Mots-clés d'ingrédients principaux à rechercher
        const mainIngredients = [
            'banane', 'bananes', 'fraise', 'fraises', 'pomme', 'pommes',
            'orange', 'oranges', 'ananas', 'mangue', 'kiwi', 'kiwis',
            'avocat', 'épinards', 'concombre', 'carotte', 'carottes',
            'betterave', 'myrtilles', 'framboises', 'mûres', 'pêche', 'pêches',
            'abricot', 'abricots', 'papaye', 'cantaloup', 'citron', 'lime',
            'yaourt', 'lait', 'miel', 'vanille', 'cannelle', 'gingembre',
            'menthe', 'basilic', 'spiruline', 'cacao', 'chocolat'
        ];

        const found = [];
        const lowerText = ingredientsText.toLowerCase();

        mainIngredients.forEach(ingredient => {
            if (lowerText.includes(ingredient) && !found.includes(ingredient)) {
                found.push(ingredient);
            }
        });

        return found.join(',');
    }
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSVLoader;
} else {
    window.CSVLoader = CSVLoader;
}