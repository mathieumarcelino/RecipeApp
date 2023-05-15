//
//  NetworkService.swift
//  Recipes
//
//  Created by Mathieu Marcelino on 15/05/2023.
//

import Foundation

class NetworkService {
    func fetchRecipes(completion: @escaping (Result<[Recipe], Error>) -> Void) {
        guard let url = URL(string: "http://localhost:9191/") else {
            print("Invalid URL")
            return
        }
        
        let task = URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                completion(.failure(error))
                return
            }
            
            guard let data = data else {
                print("No data received.")
                return
            }
            
            do {
                let decoder = JSONDecoder()
                let recipes = try decoder.decode([Recipe].self, from: data)
                completion(.success(recipes))
            } catch {
                completion(.failure(error))
            }
        }
        
        task.resume()
    }
}
