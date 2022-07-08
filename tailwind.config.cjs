const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  purge: {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    // These options are passed through directly to PurgeCSS
    options: {
      // Generate col-span-1 -> 12
      safelist: [...['red-300',
      'green-300',
      'blue-300',
      'yellow-300',
      'orange-300',
      'pink-300',].map(c => `bg-${c}`) ,  ...['red-300',
      'green-300',
      'blue-300',
      'yellow-300',
      'orange-300',
      'pink-300',].map(c => `hover:border-${c}`)],
    },
  },
  theme: {
  },

  plugins: [],
};

module.exports = config;
