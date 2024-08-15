export default (excludedRegex: RegExp) => ({
    test: /\.svg$/,
    exclude: excludedRegex,
    use: ['@svgr/webpack', 'file-loader'],
})