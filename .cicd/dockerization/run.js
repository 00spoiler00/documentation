const { exec } = require('child_process')
const path = require('path')

const BUILD_PATH = path.join(__dirname, "..", "..", ".vitepress", "dist")

function execPromise(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject({ error, stdout, stderr })
                return
            }
            resolve({ stdout, stderr })
        })
    })
}

async function main() {

    console.log("You will need Docker Desktop up & running for this to work !!!")
    console.log("One done, you can browse to http://localhost and check result")

    // Build
    console.log('Building image...')
    await execPromise(`docker build  -t uve-developer-portal ${__dirname}/.`, (error, stdout, stderr) => {
        if (error) console.error(`exec error: ${error}`)
        console.log(stdout)
        console.error(stderr)
    })

    // Run
    console.log('Running image...')

    console.log('Removing any existing container named uve-developer-portal...')

    // Delete old image
    await execPromise('docker rm -f uve-developer-portal', (error, stdout, stderr) => {
        if (error) {
            console.warn('Warning: Failed to remove the existing container. It might not exist.')
            console.warn(`Warning details: ${error}`)
        }
    })

    // Create new image
    await execPromise(`docker run -d --name uve-developer-portal -p 80:80 -v "${BUILD_PATH}":/usr/share/nginx/html uve-developer-portal`, (error, stdout, stderr) => {
        if (error) console.error(`exec error: ${error}`)
        console.log(stdout)
        console.error(stderr)
    })

    // Compile
    console.log('Compiling JS project...')
    execPromise('npm run docs:build', (error, stdout, stderr) => {
        if (error) console.error(`exec error: ${error}`)
        console.log(stdout)
        console.error(stderr)
    })

    console.log('Process completed.')
}

main()
