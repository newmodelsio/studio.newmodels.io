import { type SchemaTypeDefinition } from 'sanity'
import { home } from './home'
import { about } from './about'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, category],
}
