const { execSync } = require("child_process");
const fs = require("fs");

async function install() {
    console.log("\x1b[34mInstalling autoprefixer, postcss, tailwindcss and lodash\x1b[0m");
    await execSync("npm install --save autoprefixer postcss tailwindcss lodash", { stdio: "inherit" });

    await createFile("@xola/ui-kit/tailwind.config", "tailwind.config.js");
    await createFile("@xola/ui-kit/postcss.config", "postcss.config.js");
}

async function createFile(package, file) {
    console.log(`\n\x1b[34mSetting up ${file}\x1b[0m`);
    if (fs.existsSync(file)) {
        console.log(` \x1b[31m ${file} already exists will not overwrite it\x1b[0m`);
    } else {
        await execSync(`echo 'module.exports = require(\"${package}\");' > ${file}`, { stdio: "inherit" });
        if (fs.existsSync(file)) {
            console.log(` \x1b[32m ${file} created\x1b[0m`);
        } else {
            console.log(` \x1b[32m Error creating ${file}\x1b[0m`);
        }
    }
}

install();
