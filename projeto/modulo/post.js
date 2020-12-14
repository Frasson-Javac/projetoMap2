let latitude;
let longitude;
module.exports = {
    post: [{

        nome: "titulo",
        email: "descricao",
        latitude: "latitude",
        longitude: "longitude"
    }],
    getposts() {
        return this.post;
    },

    newpost(nome, email) {
        this.post.push({ nome, email, latitude, longitude });
    }
}