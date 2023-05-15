//
//  RecipeListView.swift
//  Recipes
//
//  Created by Mathieu Marcelino on 15/05/2023.
//

import SwiftUI

struct RecipeListView: View {
    @State private var recipes: [Recipe] = []
    private let networkService = NetworkService()

    var body: some View {
        NavigationView {
            List(recipes) { recipe in
                NavigationLink(destination: RecipeDetailView(recipe: recipe)) {
                    Text("\(recipe.id)")
                        .bold()
                        .frame(width: 50, alignment: .leading)
                    VStack(alignment: .leading) {
                        Text(recipe.name)
                            .fontWeight(.bold)
                        Text(recipe.ingredients.joined(separator: ", "))
                    }
                }
            }
            .onAppear(perform: loadRecipes)
            .navigationTitle("Recettes")
        }
    }
    
    private func loadRecipes() {
        networkService.fetchRecipes { result in
            switch result {
            case .success(let recipes):
                DispatchQueue.main.async {
                    self.recipes = recipes
                }
            case .failure(let error):
                print(error)
            }
        }
    }
}
