//___Puppeteer __________________________________________________________
//Dommage, les retours via CVReader sont pas bon du tout. L'ajout de metadonnées n'apporte rien.

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const url = "http://localhost:3000"; //a modifier par une variable d'environnement

(async function() {
    try {
        console.log('Current working directory:', process.cwd());
        console.log('Absolute path for the PDF file:', path.resolve("tiffanie_quilbeuf_cv_cda_puppeteer.pdf"));

        // Vérification de l'écriture d'un fichier de test
        const testFilePath = path.resolve('test_file.txt');
        fs.writeFileSync(testFilePath, 'This is a test file');
        console.log('Test file written successfully:', testFilePath);

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            timeout: 60000
        });
        const page = await browser.newPage();

        // await page.setContent('<h1>test</h1>');
        await page.goto(url);
        await page.emulateMediaType('screen');
        await page.pdf({
            path: "tiffanie_quilbeuf_cv_cda_puppeteer.pdf",
            format: 'A4',
            printBackground: true,
        });

        console.log('PDF généré avec succès !');
        await browser.close();

    } catch (e) {
        console.error('Erreur lors de la génération du PDF:', e);
    }
})();




//___wkhtmltopdf __________________________________________________________
//Dommage, ne prend pas en charge le CSS avancé, donc pas de grid, ni de flexbox !

// const wkhtmltopdf = require('wkhtmltopdf');
// const fs = require('fs');
//
// // URL de votre fichier HTML local
// const url = "http://172.31.208.1:3000";
//
// // Options pour wkhtmltopdf
// const options = {
//     pageSize: 'A4',
//     orientation: 'portrait',
//     allow: ['./css/reset.css',
//         "./css/helpers.css",
//         "./css/style.css",
//         '../font/',
//         "../font/lato-v24-latin-regular.woff2",
//         '../font/lato-v24-latin-700.woff2',
//         '../font/montserrat-v26-latin-regular.woff2',
//         '../font/montserrat-v26-latin-700.woff2',
//     ]
// };
//
// // Fonction pour générer le PDF
// wkhtmltopdf(url, options)
//     .pipe(fs.createWriteStream('cv_tiffanie_quilbeuf_cda_test.pdf'))
//     .on('finish', () => {
//         console.log('PDF généré avec succès !');
//     });
