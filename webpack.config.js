module.exports = {
    // ...other webpack configuration options
  
    module: {
      rules: [
        // ...other rules
  
        // Rule for handling Markdown files
        {
          test: /\.md$/,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },
  };
  