import { type SchemaTypeDefinition } from 'sanity'
import { home } from './home'
import { about } from './about'
import { filters } from './filters'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, filters],
}
