import { Schema } from 'mongoose'

/* Article Schema

*/
const ArticleSchema = new Schema({
    title: String,
    content: String
});

export default ArticleSchema;