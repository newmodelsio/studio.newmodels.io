import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .child(
          S.document()
            .schemaType('home') // must match your schema name
            .documentId('home') // fixed ID = only one page
        ),

      S.documentTypeListItem('category')
        .title('Categories'),
      S.listItem()
        .title('About')
        .child(
          S.document()
            .schemaType('about') // must match your schema name
            .documentId('about') // fixed ID = only one page
        ),
    ])
