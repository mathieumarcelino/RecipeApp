// RecipeDetailView.swift

import SwiftUI

struct RecipeDetailView: View {
    let recipe: Recipe
    
    var body: some View {
        VStack(alignment: .leading) {
            
            Text(recipe.recipe)
                .font(.body)
            
            Spacer()
        }
        .padding()
        .navigationTitle(recipe.name)
    }
}
