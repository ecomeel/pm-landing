import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  {
    rules: {
      'semi': ['error', 'never'],
      'eqeqeq': 'warn',
      'func-call-spacing': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'indent': ['error', 2],
      // 'sort-imports': 'warn',

      'vue/array-bracket-spacing': ['error', 'always'],
      'vue/arrow-spacing': 'error',
      'vue/block-spacing': 'error',
      'vue/brace-style': 'error',
      'vue/comma-spacing': 'error',
      'vue/eqeqeq': 'warn',
      'vue/no-extra-parens': 'warn',
      'vue/prefer-template': 'warn',
      'vue/space-in-parens': ['warn', 'never'],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': 'error',
      'vue/template-curly-spacing': ['warn', 'never'],
      'vue/no-v-html': "off",
      'vue/max-attributes-per-line': ['error', {
        singleline: 2,
        multiline: 1,
      }],
      'vue/v-slot-style': ['error', {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      }],
      'vue/attributes-order': ['error', {
        order: [
          "CONDITIONALS",
          "GLOBAL",
          "LIST_RENDERING",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_ATTR",
          "EVENTS"
        ],
        alphabetical: true,
      }],


      'vue/block-lang': ['error', {
        style: {
          lang: 'scss'
        },
        script: {
          lang: 'ts'
        }
      }],
      'vue/component-api-style': ['error'],
      'vue/component-name-in-template-casing': ['error'],
      'vue/component-options-name-casing': ['error'],
      'vue/custom-event-name-casing': ['error'],
      'vue/html-comment-content-newline': ['error'],
      'vue/html-comment-content-spacing': ['error'],
      'vue/html-comment-indent': ['error'],
      'vue/new-line-between-multi-line-property': ['error'],
      'vue/no-empty-component-block': ['error'],
      'vue/no-required-prop-with-default': ['warn'],
      'vue/no-root-v-if': ['error'],
      'vue/no-static-inline-styles': ['error'],
      'vue/no-this-in-before-route-enter': ['warn'],
      'vue/no-undef-components': ['error', {
        ignorePatterns: [
          'RouterLink', 'RouterView'
        ]
      }],
      'vue/no-undef-properties': ['warn'],
      'vue/no-unused-properties': ['warn'],
      'vue/no-unused-refs': ['warn'],
      'vue/no-useless-mustaches': ['warn'],
      'vue/no-useless-v-bind': ['warn'],
      'vue/padding-line-between-blocks': ['error'],
      'vue/padding-lines-in-component-definition': ['error'],
      'vue/prefer-define-options': ['error'],
      'vue/prefer-separate-static-class': ['warn'],
      'vue/require-macro-variable-name': ['warn'],
      'vue/v-for-delimiter-style': ['warn'],

      // // vue.js 3 rules
      // 'vue/component-tags-order': ['error', {
      //   order: ['template', 'script', 'style']
      // }],
      // 'vue/no-restricted-syntax': ['error'],
      // 'vue/define-emits-declaration': ['error'],
      // 'vue/define-props-declaration': ['error'],
      // 'vue/no-template-target-blank': ['error', {
      //   allowReferrer: true
      // }],
    },
  },
)
