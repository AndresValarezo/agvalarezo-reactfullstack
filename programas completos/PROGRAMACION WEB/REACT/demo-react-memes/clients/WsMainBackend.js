

function getAllMemes() {
    return new Promise((resolve, reject ) => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(content => resolve(content.data.memes))
        .catch(reject)
    })
}

export {
    getAllMemes
}