const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

// Function to read a file
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Function to write content to a file
function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// Function to insert CSS content into HTML
async function insertCSSIntoHTML(htmlFilePath, cssFilePath) {
    try {
        const htmlContent = await readFile(htmlFilePath);
        const cssContent = await readFile(cssFilePath);

        const modifiedHTMLContent = htmlContent.replace(
            /<style>\s*<\/style>/,
            `<style>${cssContent}</style>`
        );

        const publicPath = path.join(htmlFilePath, '../_public/')
        if(!fs.existsSync(publicPath)){
            fs.mkdirSync(publicPath)
        }

        const fileName = path.basename(htmlFilePath)

        await writeFile(path.join(publicPath, fileName), modifiedHTMLContent);

        console.log('CSS inserted successfully into HTML file.');
    } catch (error) {
        console.error('Error inserting CSS into HTML:', error);
    }
}

if(!argv.path){
    console.log("PATH Argument not provided <command> -- --path")
    return
}

if(!argv.css){
    console.log("CSS Argument not provided <command> -- --css")
    return
}


// Replace these paths with your actual HTML and CSS file paths
const htmlFilePath = path.join(__dirname, argv.path);
const cssFilePath = path.join(__dirname, argv.css);


insertCSSIntoHTML(htmlFilePath, cssFilePath);
