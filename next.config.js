module.exports = {
    async redirects() {
        return [
            {
                source: '/account',
                destination: '/account/general',
                permanent: true,
            },
        ]
    },
}