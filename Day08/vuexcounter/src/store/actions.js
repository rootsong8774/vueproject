export const increment = ({commit})=>{commit('increment')}
export const decrement = ({commit})=>{commit('decrement')}
export const incrementIfOdd = ({commit, state}) => {
  if (state.count % 2 == 1) {
    commit('increment')
  }
}
