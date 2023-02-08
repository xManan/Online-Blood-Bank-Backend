import 'module-alias/register'
import PostController from '@/resources/post/post.controller'
import App from './app'

// validateEnv()

const app = new App([new PostController()], 6969)

app.listen()
