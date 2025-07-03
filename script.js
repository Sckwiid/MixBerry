// Données simulées des smoothies (remplace le CSV)
const smoothiesData = [
    {
        id: 1,
        title: "Smoothie Tropical Paradise",
        ingredients: "1 banane, 1/2 ananas, 1/2 mangue, 200ml lait de coco, 1 cuillère à soupe de miel, quelques glaçons",
        directions: "Épluchez et coupez la banane en rondelles. Coupez l'ananas et la mangue en morceaux. Mettez tous les fruits dans le blender. Ajoutez le lait de coco et le miel. Mixez jusqu'à obtenir une texture lisse. Ajoutez les glaçons et mixez encore quelques secondes. Servez immédiatement dans des verres frais.",
        NER: "banane,ananas,mangue,lait de coco,miel",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 2,
        title: "Green Power Smoothie",
        ingredients: "2 poignées d'épinards frais, 1 pomme verte, 1/2 avocat, 1 banane, 250ml eau de coco, 1 cuillère à café de spiruline, jus d'1/2 citron",
        directions: "Lavez soigneusement les épinards. Épluchez et coupez la pomme en quartiers. Coupez l'avocat et la banane en morceaux. Mettez tous les ingrédients dans le blender. Mixez pendant 2 minutes jusqu'à obtenir une consistance crémeuse. Ajustez la texture avec de l'eau de coco si nécessaire. Servez dans un grand verre.",
        NER: "épinards,pomme,avocat,banane,eau de coco,spiruline,citron",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 3,
        title: "Berry Blast Antioxydant",
        ingredients: "1 tasse de myrtilles, 1/2 tasse de framboises, 1/2 tasse de mûres, 1 banane, 200ml yaourt grec, 1 cuillère à soupe de graines de chia, 1 cuillère à café de miel",
        directions: "Lavez tous les fruits rouges. Épluchez la banane et coupez-la en rondelles. Mettez tous les fruits dans le blender. Ajoutez le yaourt grec, les graines de chia et le miel. Mixez pendant 1-2 minutes jusqu'à obtenir une texture homogène. Laissez reposer 5 minutes pour que les graines de chia gonflent. Mixez encore brièvement et servez.",
        NER: "myrtilles,framboises,mûres,banane,yaourt grec,graines de chia,miel",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 4,
        title: "Smoothie Chocolat Banane",
        ingredients: "2 bananes mûres, 2 cuillères à soupe de cacao en poudre, 250ml lait d'amande, 1 cuillère à soupe de beurre d'amande, 1 cuillère à café de sirop d'érable, 1/2 cuillère à café de vanille",
        directions: "Épluchez les bananes et coupez-les en rondelles. Mettez-les au congélateur pendant 30 minutes pour un smoothie plus épais. Mettez tous les ingrédients dans le blender. Mixez pendant 2 minutes jusqu'à obtenir une texture crémeuse et lisse. Goûtez et ajustez la douceur avec du sirop d'érable si nécessaire. Servez dans des verres et saupoudrez de cacao si désiré.",
        NER: "banane,cacao,lait d'amande,beurre d'amande,sirop d'érable,vanille",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 5,
        title: "Smoothie Mangue Passion",
        ingredients: "1 mangue mûre, 2 fruits de la passion, 1/2 banane, 200ml lait de coco, 1 cuillère à soupe de miel, jus d'1/2 lime, quelques feuilles de menthe",
        directions: "Épluchez et coupez la mangue en morceaux. Coupez les fruits de la passion en deux et récupérez la pulpe. Épluchez la banane et coupez-la en rondelles. Mettez tous les fruits dans le blender avec le lait de coco, le miel et le jus de lime. Mixez jusqu'à obtenir une consistance lisse. Ajoutez les feuilles de menthe et mixez brièvement. Servez immédiatement avec des glaçons.",
        NER: "mangue,fruit de la passion,banane,lait de coco,miel,lime,menthe",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 6,
        title: "Smoothie Fraise Vanille",
        ingredients: "2 tasses de fraises fraîches, 1 banane, 200ml lait d'avoine, 2 cuillères à soupe de yaourt à la vanille, 1 cuillère à soupe de miel, 1/2 cuillère à café d'extrait de vanille",
        directions: "Lavez et équeutez les fraises. Épluchez la banane et coupez-la en rondelles. Mettez tous les fruits dans le blender. Ajoutez le lait d'avoine, le yaourt à la vanille, le miel et l'extrait de vanille. Mixez pendant 1-2 minutes jusqu'à obtenir une texture crémeuse. Goûtez et ajustez la douceur si nécessaire. Servez dans des verres et décorez avec des fraises fraîches.",
        NER: "fraises,banane,lait d'avoine,yaourt,miel,vanille",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 7,
        title: "Smoothie Détox Concombre Menthe",
        ingredients: "1 concombre, 1 pomme verte, 1 poignée d'épinards, 10 feuilles de menthe fraîche, jus d'1 citron, 250ml eau de coco, 1 cuillère à café de gingembre frais râpé",
        directions: "Lavez et épluchez le concombre, coupez-le en morceaux. Lavez et coupez la pomme en quartiers. Lavez les épinards et la menthe. Mettez tous les légumes et fruits dans le blender. Ajoutez le jus de citron, l'eau de coco et le gingembre râpé. Mixez pendant 2 minutes jusqu'à obtenir une consistance lisse. Filtrez si vous préférez une texture plus fine. Servez bien frais.",
        NER: "concombre,pomme,épinards,menthe,citron,eau de coco,gingembre",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 8,
        title: "Smoothie Pêche Abricot",
        ingredients: "2 pêches mûres, 4 abricots, 1/2 banane, 200ml yaourt nature, 1 cuillère à soupe de miel, 1/4 cuillère à café de cannelle, quelques amandes effilées",
        directions: "Lavez, dénoyautez et coupez les pêches et abricots en morceaux. Épluchez la banane et coupez-la en rondelles. Mettez tous les fruits dans le blender avec le yaourt nature, le miel et la cannelle. Mixez pendant 1-2 minutes jusqu'à obtenir une texture onctueuse. Goûtez et ajustez la douceur. Servez dans des verres et garnissez d'amandes effilées.",
        NER: "pêches,abricots,banane,yaourt,miel,cannelle,amandes",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 9,
        title: "Smoothie Protéiné Beurre de Cacahuète",
        ingredients: "1 banane, 2 cuillères à soupe de beurre de cacahuète, 250ml lait d'amande, 1 scoop de protéine en poudre vanille, 1 cuillère à soupe de graines de lin, 1 cuillère à café de miel, quelques glaçons",
        directions: "Épluchez la banane et coupez-la en rondelles. Mettez tous les ingrédients dans le blender. Mixez pendant 2 minutes jusqu'à obtenir une consistance crémeuse et homogène. Ajoutez plus de lait d'amande si la texture est trop épaisse. Goûtez et ajustez la douceur avec du miel. Servez immédiatement dans des verres hauts.",
        NER: "banane,beurre de cacahuète,lait d'amande,protéine,graines de lin,miel",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 10,
        title: "Smoothie Carotte Orange Gingembre",
        ingredients: "2 carottes moyennes, 2 oranges, 1 morceau de gingembre frais (2cm), 200ml eau de coco, 1 cuillère à soupe de miel, 1/2 cuillère à café de curcuma, quelques glaçons",
        directions: "Épluchez et coupez les carottes en rondelles. Faites-les cuire à la vapeur pendant 10 minutes jusqu'à ce qu'elles soient tendres. Laissez refroidir. Épluchez les oranges et retirez les pépins. Épluchez et râpez le gingembre. Mettez tous les ingrédients dans le blender et mixez pendant 2-3 minutes jusqu'à obtenir une texture lisse. Servez frais avec des glaçons.",
        NER: "carottes,oranges,gingembre,eau de coco,miel,curcuma",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 11,
        title: "Smoothie Kiwi Pomme Verte",
        ingredients: "3 kiwis mûrs, 1 pomme verte, 1/2 concombre, 200ml eau de coco, 1 cuillère à soupe de miel, jus d'1/2 citron vert, quelques feuilles de basilic",
        directions: "Épluchez les kiwis et coupez-les en morceaux. Lavez et coupez la pomme en quartiers. Épluchez le concombre et coupez-le en morceaux. Mettez tous les fruits et légumes dans le blender. Ajoutez l'eau de coco, le miel, le jus de citron vert et les feuilles de basilic. Mixez pendant 2 minutes jusqu'à obtenir une consistance lisse. Servez immédiatement bien frais.",
        NER: "kiwis,pomme,concombre,eau de coco,miel,citron vert,basilic",
        link: "",
        source: "SmoothieHub",
    },
    {
        id: 12,
        title: "Smoothie Betterave Framboise",
        ingredients: "1 betterave cuite, 1 tasse de framboises, 1/2 banane, 200ml yaourt grec, 1 cuillère à soupe de miel, jus d'1/2 citron, 1 cuillère à café de graines de tournesol",
        directions: "Épluchez et coupez la betterave cuite en morceaux. Lavez les framboises. Épluchez la banane et coupez-la en rondelles. Mettez tous les ingrédients dans le blender sauf les graines de tournesol. Mixez pendant 2 minutes jusqu'à obtenir une texture crémeuse. Goûtez et ajustez la douceur. Servez dans des verres et garnissez de graines de tournesol.",
        NER: "betterave,framboises,banane,yaourt grec,miel,citron,graines de tournesol",
        link: "",
        source: "SmoothieHub",
    }
];

// Variables globales
let allRecipes = [];
let filteredRecipes = [];
let excludedIngredients = new Set();
let currentRecipe = null;
let useCSVData = false;
let displayedRecipesCount = 0;
let allIngredients = [];
let filteredIngredients = [];

// Variables pour le scroll
let lastScrollTop = 0;
let scrollTimeout;

// Éléments DOM
const loader = document.getElementById('loader');
const searchInput = document.getElementById('searchInput');
const recipesGrid = document.getElementById('recipesGrid');
const noResults = document.getElementById('noResults');
const homePage = document.getElementById('homePage');
const recipePage = document.getElementById('recipePage');
const backBtn = document.getElementById('backBtn');
const recipeDetail = document.getElementById('recipeDetail');
const similarGrid = document.getElementById('similarGrid');
const recipesCount = document.getElementById('recipesCount');
const loadMoreSection = document.getElementById('loadMoreSection');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const header = document.querySelector('.header');

// Éléments popup filtres
const filtersBtn = document.getElementById('filtersBtn');
const filtersPopup = document.getElementById('filtersPopup');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
const filtersSearch = document.getElementById('filtersSearch');
const filtersGrid = document.getElementById('filtersGrid');
const clearFilters = document.getElementById('clearFilters');
const applyFilters = document.getElementById('applyFilters');
const filtersCount = document.getElementById('filtersCount');
const activeFilters = document.getElementById('activeFilters');

// Nouveau bouton "Effacer tout" principal
const clearAllFiltersBtn = document.getElementById('clearAllFiltersBtn');

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupScrollHandler();
});

async function initializeApp() {
    try {
        // Simulation du chargement
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Essayer de charger les données CSV d'abord
        if (typeof CSVLoader !== 'undefined') {
            try {
                const csvData = await CSVLoader.loadSmoothiesFromCSV('./smoothies.csv');
                if (csvData && csvData.length > 0) {
                    allRecipes = csvData;
                    useCSVData = true;
                    console.log(`Chargé ${csvData.length} recettes depuis le CSV`);
                } else {
                    throw new Error('Aucune donnée CSV valide trouvée');
                }
            } catch (csvError) {
                console.warn('Impossible de charger le CSV, utilisation des données par défaut:', csvError);
                allRecipes = smoothiesData;
            }
        } else {
            // Fallback vers les données par défaut
            allRecipes = smoothiesData;
        }
        
        filteredRecipes = [...allRecipes];
        
        // Générer la liste des ingrédients
        generateIngredientsList();
        
        // Afficher les recettes
        displayRecipes();
        
        // Configurer les événements
        setupEventListeners();
        
        // Mettre à jour le compteur
        updateRecipesCount();
        
        // Masquer le loader
        loader.classList.add('hidden');
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
        loader.innerHTML = '<p>Erreur lors du chargement des recettes</p>';
    }
}

function setupScrollHandler() {
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        // Seuil de déclenchement réduit pour une meilleure réactivité
        const threshold = 80;
        
        if (scrollTop > threshold) {
            if (scrollDirection === 'down') {
                // Scroll vers le bas - cacher le header
                header.classList.add('hidden');
                header.classList.add('compact');
            } else {
                // Scroll vers le haut - montrer le header en mode compact
                header.classList.remove('hidden');
                header.classList.add('compact');
            }
        } else {
            // En haut de la page - header normal
            header.classList.remove('hidden');
            header.classList.remove('compact');
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Fonction pour nettoyer et normaliser les ingrédients
function cleanAndNormalizeIngredient(ingredient) {
    if (!ingredient) return '';
    
    // Nettoyer les caractères spéciaux et normaliser
    let cleaned = ingredient.trim().toLowerCase();
    
    // Enlever les caractères spéciaux problématiques
    cleaned = cleaned.replace(/["\[\]']/g, '');
    cleaned = cleaned.replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g, '');
    
    // Normaliser les variantes communes
    const normalizations = {
        // Sucre et édulcorants
        'sucre': 'sucre',
        'sucre de palme': 'sucre',
        'sucre blanc': 'sucre',
        'sucre brun': 'sucre',
        'sucre roux': 'sucre',
        'cassonade': 'sucre',
        'sirop d\'érable': 'sucre',
        'sirop de coco': 'sucre',
        'sirop de chocolat': 'sucre',
        'miel': 'miel',
        'stevia': 'édulcorant',
        'édulcorant': 'édulcorant',
        
        // Yaourts
        'yaourt': 'yaourt',
        'yaourt nature': 'yaourt',
        'yaourt grec': 'yaourt',
        'yaourt à la vanille': 'yaourt',
        'yaourt à la fraise': 'yaourt',
        'yaourt glacé': 'yaourt',
        'yaourt sans matières grasses': 'yaourt',
        'yaourt faible en gras': 'yaourt',
        'yaourt allégé': 'yaourt',
        'gelée de fraise': 'yaourt',
        
        // Laits
        'lait': 'lait',
        'lait entier': 'lait',
        'lait écrémé': 'lait',
        'lait demi-écrémé': 'lait',
        'lait froid': 'lait',
        'lait en poudre': 'lait',
        'lait d\'amande': 'lait végétal',
        'lait de coco': 'lait végétal',
        'lait d\'avoine': 'lait végétal',
        'lait de soja': 'lait végétal',
        'lait de riz': 'lait végétal',
        'lait de noisette': 'lait végétal',
        
        // Fruits - normaliser les pluriels et variantes
        'bananes': 'banane',
        'banane mûre': 'banane',
        'banane congelée': 'banane',
        'fraises': 'fraise',
        'fraises fraîches': 'fraise',
        'fraises surgelées': 'fraise',
        'fraises congelées': 'fraise',
        'pommes': 'pomme',
        'pomme verte': 'pomme',
        'oranges': 'orange',
        'kiwis': 'kiwi',
        'kiwi mûr': 'kiwi',
        'pêches': 'pêche',
        'pêche mûre': 'pêche',
        'abricots': 'abricot',
        'framboises': 'framboise',
        'framboises fraîches': 'framboise',
        'myrtilles': 'myrtille',
        'myrtilles fraîches': 'myrtille',
        'mûres': 'mûre',
        'carottes': 'carotte',
        'carotte moyenne': 'carotte',
        'baies': 'fruits rouges',
        'fruits rouges': 'fruits rouges',
        
        // Légumes verts
        'épinards': 'épinards',
        'épinards frais': 'épinards',
        'concombre': 'concombre',
        'avocat': 'avocat',
        'betterave': 'betterave',
        'betterave cuite': 'betterave',
        
        // Herbes et épices
        'menthe': 'menthe',
        'menthe fraîche': 'menthe',
        'basilic': 'basilic',
        'gingembre': 'gingembre',
        'gingembre frais': 'gingembre',
        'gingembre râpé': 'gingembre',
        'cannelle': 'cannelle',
        'cannelle moulue': 'cannelle',
        'vanille': 'vanille',
        'extrait de vanille': 'vanille',
        'curcuma': 'curcuma',
        'spiruline': 'spiruline',
        
        // Graines et noix
        'graines de chia': 'graines',
        'graines de lin': 'graines',
        'graines de tournesol': 'graines',
        'amandes': 'noix',
        'amandes effilées': 'noix',
        'beurre d\'amande': 'beurre de noix',
        'beurre de cacahuète': 'beurre de noix',
        'noix de muscade': 'épices',
        'noix de muscade moulue': 'épices',
        
        // Liquides
        'eau de coco': 'eau de coco',
        'eau': 'eau',
        'jus d\'orange': 'jus',
        'jus de citron': 'jus',
        'jus de lime': 'jus',
        'jus de framboise': 'jus',
        'jus de canneberge': 'jus',
        'jus de fruits': 'jus',
        'jus frais': 'jus',
        'concentré de jus d\'orange': 'jus',
        'concentré de jus de pomme': 'jus',
        'limonade glacée': 'jus',
        'boisson ananas-orange': 'jus',
        
        // Glace et froid
        'glaçons': 'glace',
        'glace pilée': 'glace',
        'glace': 'glace',
        
        // Autres ingrédients
        'protéine': 'protéine',
        'protéine en poudre': 'protéine',
        'petit-déjeuner instantané': 'protéine',
        'cacao': 'cacao',
        'cacao en poudre': 'cacao',
        'chocolat': 'chocolat',
        'purée de citrouille': 'citrouille',
        'citron': 'citron',
        'citron vert': 'citron vert',
        'lime': 'citron vert',
        'fruit de la passion': 'fruit exotique',
        'papaye': 'fruit exotique',
        'ananas': 'ananas',
        'ananas frais': 'ananas',
        'mangue': 'mangue',
        'mangue mûre': 'mangue',
        'cantaloup': 'melon'
    };
    
    // Appliquer les normalisations
    for (const [key, value] of Object.entries(normalizations)) {
        if (cleaned.includes(key)) {
            return value;
        }
    }
    
    // Si pas de normalisation trouvée, retourner l'ingrédient nettoyé
    // Mais seulement s'il fait plus d'un caractère et ne contient pas que des caractères spéciaux
    if (cleaned.length > 1 && /[a-zA-Zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/.test(cleaned)) {
        return cleaned;
    }
    
    return '';
}

function generateIngredientsList() {
    const ingredientsSet = new Set();
    
    // Extraire tous les ingrédients uniques
    allRecipes.forEach(recipe => {
        if (recipe.NER) {
            recipe.NER.split(',').forEach(ingredient => {
                const cleaned = cleanAndNormalizeIngredient(ingredient.trim());
                if (cleaned) {
                    ingredientsSet.add(cleaned);
                }
            });
        }
    });
    
    allIngredients = Array.from(ingredientsSet).sort();
    filteredIngredients = [...allIngredients];
    
    console.log('Ingrédients normalisés:', allIngredients);
    
    // Générer la grille des filtres
    generateFiltersGrid();
}

function generateFiltersGrid() {
    filtersGrid.innerHTML = '';
    
    filteredIngredients.forEach(ingredient => {
        const filterItem = document.createElement('div');
        filterItem.className = 'filter-item';
        if (excludedIngredients.has(ingredient)) {
            filterItem.classList.add('selected');
        }
        
        filterItem.innerHTML = `
            <span class="filter-emoji">${getIngredientEmoji(ingredient)}</span>
            <span class="filter-name">${ingredient}</span>
        `;
        
        filterItem.addEventListener('click', () => toggleIngredientFilter(ingredient, filterItem));
        filtersGrid.appendChild(filterItem);
    });
}

function toggleIngredientFilter(ingredient, element) {
    if (excludedIngredients.has(ingredient)) {
        excludedIngredients.delete(ingredient);
        element.classList.remove('selected');
    } else {
        excludedIngredients.add(ingredient);
        element.classList.add('selected');
    }
    
    updateFiltersCount();
}

function updateFiltersCount() {
    const count = excludedIngredients.size;
    filtersCount.textContent = count;
    filtersCount.style.display = count > 0 ? 'inline' : 'none';
    
    // Afficher/masquer le bouton "Effacer tout" principal
    clearAllFiltersBtn.style.display = count > 0 ? 'flex' : 'none';
    
    // Mettre à jour les filtres actifs
    updateActiveFilters();
}

function updateActiveFilters() {
    activeFilters.innerHTML = '';
    
    if (excludedIngredients.size === 0) {
        activeFilters.style.display = 'none';
        return;
    }
    
    activeFilters.style.display = 'flex';
    
    Array.from(excludedIngredients).forEach(ingredient => {
        const filterTag = document.createElement('div');
        filterTag.className = 'active-filter-tag';
        filterTag.innerHTML = `
            <span>${getIngredientEmoji(ingredient)} ${ingredient}</span>
            <button class="remove-filter" data-ingredient="${ingredient}">✕</button>
        `;
        
        filterTag.querySelector('.remove-filter').addEventListener('click', (e) => {
            e.stopPropagation();
            excludedIngredients.delete(ingredient);
            updateFiltersCount();
            generateFiltersGrid();
            filterRecipes();
        });
        
        activeFilters.appendChild(filterTag);
    });
}

function clearAllFiltersAndRefresh() {
    excludedIngredients.clear();
    updateFiltersCount();
    generateFiltersGrid();
    filterRecipes();
}

function setupEventListeners() {
    // Recherche en temps réel
    searchInput.addEventListener('input', debounce(filterRecipes, 300));
    
    // Bouton retour
    backBtn.addEventListener('click', showHomePage);
    
    // Popup filtres
    filtersBtn.addEventListener('click', openFiltersPopup);
    closePopup.addEventListener('click', closeFiltersPopup);
    popupOverlay.addEventListener('click', closeFiltersPopup);
    
    // Recherche dans les filtres
    filtersSearch.addEventListener('input', debounce(filterIngredients, 200));
    
    // Boutons du popup
    clearFilters.addEventListener('click', clearAllFilters);
    applyFilters.addEventListener('click', applyFiltersAndClose);
    
    // Nouveau bouton "Effacer tout" principal
    clearAllFiltersBtn.addEventListener('click', clearAllFiltersAndRefresh);
    
    // Bouton "Voir plus"
    loadMoreBtn.addEventListener('click', loadMoreRecipes);
    
    // Navigation avec les touches
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (filtersPopup.classList.contains('active')) {
                closeFiltersPopup();
            } else if (!homePage.classList.contains('active')) {
                showHomePage();
            }
        }
    });
}

function openFiltersPopup() {
    filtersPopup.classList.add('active');
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    filtersSearch.focus();
}

function closeFiltersPopup() {
    filtersPopup.classList.remove('active');
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
    filtersSearch.value = '';
    filteredIngredients = [...allIngredients];
    generateFiltersGrid();
}

function filterIngredients() {
    const searchTerm = filtersSearch.value.toLowerCase().trim();
    
    if (!searchTerm) {
        filteredIngredients = [...allIngredients];
    } else {
        filteredIngredients = allIngredients.filter(ingredient =>
            ingredient.toLowerCase().includes(searchTerm)
        );
    }
    
    generateFiltersGrid();
}

function clearAllFilters() {
    excludedIngredients.clear();
    updateFiltersCount();
    generateFiltersGrid();
}

function applyFiltersAndClose() {
    closeFiltersPopup();
    filterRecipes();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredRecipes = allRecipes.filter(recipe => {
        // Filtrage par recherche textuelle
        const matchesSearch = !searchTerm || 
            recipe.title.toLowerCase().includes(searchTerm) ||
            (recipe.NER && recipe.NER.toLowerCase().includes(searchTerm)) ||
            recipe.ingredients.toLowerCase().includes(searchTerm);
        
        // Filtrage par exclusion d'ingrédients (avec normalisation)
        const hasExcludedIngredients = recipe.NER && 
            recipe.NER.split(',').some(ingredient => {
                const normalizedIngredient = cleanAndNormalizeIngredient(ingredient.trim());
                return excludedIngredients.has(normalizedIngredient);
            });
        
        return matchesSearch && !hasExcludedIngredients;
    });
    
    displayedRecipesCount = 0;
    displayRecipes();
    updateRecipesCount();
}

function displayRecipes() {
    recipesGrid.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        noResults.style.display = 'block';
        loadMoreSection.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    
    // Afficher 20 recettes initialement
    const recipesToShow = filteredRecipes.slice(0, 20);
    displayedRecipesCount = recipesToShow.length;
    
    recipesToShow.forEach((recipe, index) => {
        const card = createRecipeCard(recipe, index);
        recipesGrid.appendChild(card);
    });
    
    // Afficher le bouton "Voir plus" si nécessaire
    if (filteredRecipes.length > displayedRecipesCount) {
        loadMoreSection.style.display = 'block';
    } else {
        loadMoreSection.style.display = 'none';
    }
}

function loadMoreRecipes() {
    const currentCount = displayedRecipesCount;
    const nextBatch = filteredRecipes.slice(currentCount, currentCount + 20);
    
    nextBatch.forEach((recipe, index) => {
        const card = createRecipeCard(recipe, currentCount + index);
        recipesGrid.appendChild(card);
    });
    
    displayedRecipesCount += nextBatch.length;
    
    // Masquer le bouton si toutes les recettes sont affichées
    if (displayedRecipesCount >= filteredRecipes.length) {
        loadMoreSection.style.display = 'none';
    }
    
    // Animation smooth scroll vers les nouvelles recettes
    setTimeout(() => {
        const newCards = recipesGrid.querySelectorAll('.recipe-card');
        if (newCards[currentCount]) {
            newCards[currentCount].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }, 100);
}

function updateRecipesCount() {
    recipesCount.textContent = filteredRecipes.length;
}

function createRecipeCard(recipe, index = 0) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.style.animationDelay = `${(index % 20) * 0.05}s`;
    
    // Extraire quelques ingrédients pour l'aperçu (avec normalisation)
    const ingredients = recipe.NER ? recipe.NER.split(',').slice(0, 4) : [];
    const ingredientsPreview = ingredients.map(ing => {
        const normalizedIng = cleanAndNormalizeIngredient(ing.trim()) || ing.trim();
        return `<span class="ingredient">${getIngredientEmoji(normalizedIng)} ${normalizedIng}</span>`;
    }).join('');
    
    card.innerHTML = `
        <h3>${recipe.title}</h3>
        <div class="recipe-preview">
            ${ingredientsPreview}
        </div>
        <button class="view-recipe-btn">Voir la recette</button>
    `;
    
    card.addEventListener('click', () => showRecipeDetail(recipe));
    
    return card;
}

function getIngredientEmoji(ingredient) {
    const emojiMap = {
        // Fruits
        'banane': '🍌',
        'fraise': '🍓',
        'pomme': '🍎',
        'orange': '🍊',
        'ananas': '🍍',
        'mangue': '🥭',
        'kiwi': '🥝',
        'pêche': '🍑',
        'abricot': '🍑',
        'myrtille': '🫐',
        'framboise': '🍇',
        'mûre': '🍇',
        'fruits rouges': '🍓',
        'fruit exotique': '🥭',
        'melon': '🍈',
        'citron': '🍋',
        'citron vert': '🍋',
        
        // Légumes
        'avocat': '🥑',
        'épinards': '🥬',
        'concombre': '🥒',
        'carotte': '🥕',
        'betterave': '🟣',
        'citrouille': '🎃',
        
        // Produits laitiers
        'lait': '🥛',
        'lait végétal': '🌱',
        'yaourt': '🥛',
        
        // Édulcorants
        'miel': '🍯',
        'sucre': '🍯',
        'édulcorant': '🍯',
        
        // Herbes et épices
        'menthe': '🌿',
        'basilic': '🌿',
        'gingembre': '🫚',
        'cannelle': '🟤',
        'vanille': '🤍',
        'curcuma': '🟡',
        'spiruline': '🌿',
        'épices': '🌶️',
        
        // Chocolat et cacao
        'cacao': '🍫',
        'chocolat': '🍫',
        
        // Graines et noix
        'graines': '🌱',
        'noix': '🌰',
        'beurre de noix': '🥜',
        
        // Liquides
        'eau de coco': '🥥',
        'eau': '💧',
        'jus': '🧃',
        'glace': '🧊',
        
        // Protéines
        'protéine': '💪'
    };
    
    return emojiMap[ingredient.toLowerCase()] || '🥤';
}

function showRecipeDetail(recipe) {
    currentRecipe = recipe;
    
    // Créer le contenu de la recette
    const ingredientsList = recipe.ingredients.split(',').map(ingredient => 
        `<li>${getIngredientEmoji(ingredient.trim())} ${ingredient.trim()}</li>`
    ).join('');
    
    // Nettoyer et formater les étapes de préparation
    const cleanDirections = cleanPreparationSteps(recipe.directions);
    const directionsList = cleanDirections.map(step => 
        `<li>${step}</li>`
    ).join('');
    
    // Créer le lien source
    let sourceContent = '';
    if (recipe.link && recipe.link.trim() !== '') {
        sourceContent = `<a href="${recipe.link}" target="_blank" rel="noopener noreferrer" class="recipe-link">Lien du site</a>`;
    } else {
        sourceContent = recipe.source || 'Source inconnue';
    }
    
    recipeDetail.innerHTML = `
        <h1 class="recipe-title">${recipe.title}</h1>
        
        <div class="recipe-section">
            <h3>🥤 Ingrédients</h3>
            <ul class="ingredients-list">
                ${ingredientsList}
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3>👨‍🍳 Préparation</h3>
            <ol class="directions-list">
                ${directionsList}
            </ol>
        </div>
        
        <div class="recipe-source">Source: ${sourceContent}</div>
    `;
    
    // Afficher les smoothies similaires
    displaySimilarRecipes(recipe);
    
    // Changer de page
    homePage.classList.remove('active');
    recipePage.classList.add('active');
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cleanPreparationSteps(directions) {
    if (!directions) return [];
    
    // Diviser par les points pour séparer les étapes
    let steps = directions.split('.').filter(step => step.trim());
    
    // Nettoyer chaque étape
    steps = steps.map(step => {
        let cleanStep = step.trim();
        
        // Enlever les virgules en début de phrase
        cleanStep = cleanStep.replace(/^,\s*/, '');
        
        // Enlever les guillemets en début et fin
        cleanStep = cleanStep.replace(/^["«]\s*/, '').replace(/\s*["»]$/, '');
        
        // Capitaliser la première lettre
        if (cleanStep.length > 0) {
            cleanStep = cleanStep.charAt(0).toUpperCase() + cleanStep.slice(1);
        }
        
        // Ajouter un point à la fin si nécessaire
        if (cleanStep && !cleanStep.endsWith('.') && !cleanStep.endsWith('!') && !cleanStep.endsWith('?')) {
            cleanStep += '.';
        }
        
        return cleanStep;
    });
    
    // Filtrer les étapes vides
    return steps.filter(step => step.length > 1);
}

function displaySimilarRecipes(currentRecipe) {
    const currentIngredients = new Set();
    
    // Normaliser les ingrédients de la recette actuelle
    if (currentRecipe.NER) {
        currentRecipe.NER.split(',').forEach(ing => {
            const normalized = cleanAndNormalizeIngredient(ing.trim());
            if (normalized) {
                currentIngredients.add(normalized);
            }
        });
    }
    
    // Trouver les recettes similaires
    const similarRecipes = allRecipes
        .filter(recipe => recipe.id !== currentRecipe.id)
        .map(recipe => {
            const recipeIngredients = new Set();
            
            if (recipe.NER) {
                recipe.NER.split(',').forEach(ing => {
                    const normalized = cleanAndNormalizeIngredient(ing.trim());
                    if (normalized) {
                        recipeIngredients.add(normalized);
                    }
                });
            }
            
            const commonIngredients = [...currentIngredients].filter(ing => 
                recipeIngredients.has(ing)
            );
            
            return {
                recipe,
                commonCount: commonIngredients.length,
                commonIngredients
            };
        })
        .filter(item => item.commonCount > 0)
        .sort((a, b) => b.commonCount - a.commonCount)
        .slice(0, 4);
    
    similarGrid.innerHTML = '';
    
    similarRecipes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'similar-card';
        
        const commonIngredientsText = item.commonIngredients
            .map(ing => getIngredientEmoji(ing) + ' ' + ing)
            .join(', ');
        
        card.innerHTML = `
            <h4>${item.recipe.title}</h4>
            <p>Ingrédients communs: ${commonIngredientsText}</p>
        `;
        
        card.addEventListener('click', () => showRecipeDetail(item.recipe));
        similarGrid.appendChild(card);
    });
}

function showHomePage() {
    recipePage.classList.remove('active');
    homePage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Gestion des erreurs globales
window.addEventListener('error', (e) => {
    console.error('Erreur JavaScript:', e.error);
});

// Performance: Lazy loading des images si nécessaire
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observer les images lazy si elles existent
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}