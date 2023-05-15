//
//  Recipe.swift
//  Recipes
//
//  Created by Mathieu Marcelino on 15/05/2023.
//

import Foundation

struct Recipe: Identifiable, Codable {
    let id: Int
    let name: String
    let ingredients: [String]
    let recipe: String
}
