const { withGradleProperties } = require('@expo/config-plugins');

/**
 * tl;dr fix for
 * https://github.com/stripe/stripe-terminal-react-native/issues/653
 *
 * This is a workaround for an issue with the Stripe Terminal SDK and Jetifier.
 * Should be able to remove this once stripe is updated to sdk 18
 * @param {*} config
 * @param {*} customName
 * @returns
 */

const withJetifierIgnoringJackson = (config, customName) => {
  return withGradleProperties(config, async config => {
    config.modResults.push({
      key: 'android.jetifier.ignorelist',
      value: 'jackson-core',
      type: 'property',
    });

    return config;
  });
};
/// Use the plugin
module.exports = withJetifierIgnoringJackson;