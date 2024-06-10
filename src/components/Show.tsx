type ShowProps = {
  when: boolean
  children: React.ReactNode
}

export const Show = ({ when, children }) => {
  return when ? children : null
}
