# Projet API

## Aperçu
Ce projet est une API simple construite avec Node.js et Express, fournissant des endpoints pour gérer les produits et les commandes. Il inclut une application frontend construite avec HTML et JavaScript pour interagir avec l'API.

## Fonctionnalités
- **Endpoints de l'API** :
  - `/api/produits` : Récupérer une liste de produits.
  - `/api/commandes` : Récupérer une liste de commandes.
- **Base de données** : Utilise SQLite pour le stockage des données avec des données fictives pour les tests.
- **Frontend** : Application simple en HTML/JS pour afficher les données de l'API.
- **Tests** : Inclut des tests unitaires utilisant Jest et Supertest.

## Installation

### Prérequis
- Node.js
- npm

### Installation
1. Clonez le dépôt :
   ```bash
   git clone <repository-url>
   ```
2. Accédez au répertoire backend et installez les dépendances :
   ```bash
   cd backend
   npm install
   ```

### Exécution de l'application
1. Démarrez le serveur backend :
   ```bash
   npm start
   ```
2. Ouvrez `frontend/index.html` dans un navigateur pour voir l'application frontend.

### Exécution des tests
Exécutez la commande suivante dans le répertoire `backend` pour lancer les tests :
```bash
npm test
```

## Déploiement
- L'application peut être déployée en utilisant Git et SSH.
- Configurez un serveur distant avec Nginx pour servir l'application.
- J'ai utiliser le PM2 pour gérer le processus Node.js en production sur le serveur distant.

### Clef publique SSH
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAtvAxSsEe5jEtcMfdDkOp7o0jV9mMBnf7mldYsCT4yY yvanne.gombetrosat@livecampus.tech
```