# Réaliser un CV visible des ATS une fois l'export pdf effectué

## En résumé : 

J'ai lu ce weekend que beaucoup de CV Canva passent mal les logiciels parseurs des recruteurs en raison des calques. La solution proposée, réaliser son CV avec Word ne me plaisait pas.
Je me suis dit qu'en reproduisant mon CV en HTML, je pourrais y inclure des métadonnées pour aider les robots analyseurs à comprendre de quoi il en retourne et gérer la mise en page à ma guise.

Dans un premier temps, j'ai tenté la génération d'un pdf avec JavaScript. J'ai testé wkhtmltopdf qui malheureusement ne prend pas en charge le CSS avancé (pas de grid, ni flexbox). Puppeteer prend en charge le CSS mais j'ai un retour moins bon qu'avec un CV Canva ou Figma.

J'ai testé les balises <meta> et les attributs itemprop avec une valeur, et la div cachée en display none. J'ai aussi tenté de réordonner les sections de mon CV de sorte que le robot lise les sections facilement reconnue au début et la section alternance et projets web à la fin.

Et j'ai testé toute les sorties pdf avec CVReader et Jobscan. J'avoue être à court d'idée. 
Je cherche actuellement une solution viable. Peut être autour de générateurs de pdf plus performants ? De toute façon, je garde la piste en réserve, éventuellement en vue d'une intégration à un portfolio.

Ci dessous vous trouverez diverses prises de notes. C'est un projet, un peu laboratoire. 

# Notes bric-à-brac

Pour générer le pdf, lancez un serveur local puis, le script de génération du pdf avec node : 

```Git Bash
http-server -p 3000
node index.js
```

Oups ! wkhtmltopdf ne prend pas en charge le CSS avancé ! Cherchons une autre piste. 

npm i puppeteer

Idée si je trouve la solution : 
- faire une comparaison entre CANVA, FIGMA, word et HTML. Rédiger un court article avec l'inconvénient de ne pas pouvoir faire de grid. 
