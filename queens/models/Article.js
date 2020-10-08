import ArticleSchema from '../schemas/ArticleSchema'
import { model } from 'mongoose'

export default model('Article', ArticleSchema)