import filterSlice, { changeFilter } from "../redusers/filterSlice"


const initialState = {
    category: "All"
}

describe("filterSlice", () => {
    it("should return state when passed an empty action", () => {
      const result = filterSlice(undefined, { type: ""})
  
      expect(result).toEqual(initialState)
    })

    it('should change category with changeFilter action', () => {
        const State = {
            category: "All"
        }
    
        const action = { type: changeFilter.type, payload: "Active"}
    
        const result = filterSlice(State, action)
    
        expect(result.category).toEqual("Active")
    })
})