import PostcssPxtorem from 'postcss-pxtorem'

export default {
  plugins: [
    PostcssPxtorem({
      propList: ['*'],
    }),
  ],
}
