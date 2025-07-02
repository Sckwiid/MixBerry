# MixBerry 🫐🍓 – Smoothie Recipes Hub

Bienvenue sur **MixBerry**, un projet open-source rassemblant **4 500+ recettes de smoothies** en français, faciles à rechercher et filtrer grâce à une interface moderne 100 % responsive.

## ✨ Fonctionnalités principales

| Catégorie | Détails |
|-----------|---------|
| 🔍 **Recherche instantanée** | Tapez n’importe quel mot-clé (banane, protéiné, vegan…) – résultat en temps réel. |
| 🏷 **Filtres avancés** | Excluez des ingrédients d’un clic (popup **🚫 Exclure des ingrédients**). |
| 🍹 **Fiches détaillées** | Ingrédients normalisés en unités métriques, instructions pas-à-pas, portions estimées. |
| 🔄 **Recettes similaires** | Suggestions dynamiques dans chaque fiche recette. |
| 📱 **Responsive** | Expérience fluide mobile & desktop (CSS Grid + Flex). |
| 🌙 **UX premium** | Loader animé “🧃”, stats de recettes, mode “Voir plus”. |

---

📊 Dataset

Fichier	Lignes	Colonnes	Particularités
smoothies.csv	4 596	title, ingredients, directions, portions	unités métriques (ml, g, kg, L), titres descriptifs, portions explicites ou estimées
Nettoyage réalisé via pandas & regex : conversion cup → ml, oz → g, suppression des doublons, estimation 300 ml ≈ 1 portion.

📜 Licence

MIT – libre à vous de cloner, modifier et partager.
Merci de citer MixBerry si vous réutilisez le dataset ou des fragments de code.

📝 Crédits & Sources

RecetteNLG – Cooking Recipes Dataset
https://www.kaggle.com/datasets/paultimothymooney/recipenlg
Utilisé comme source première avant traduction, filtrage smoothies et nettoyage.
Cookbooks.com (domaine public)
Scripts internes (scripts/clean_dataset.py) pour conversion d’unités et dé-duplication.
