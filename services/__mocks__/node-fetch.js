const res = {
  json: () => {
    return {
      completed: false,
      id: 1,
      title: 'delectus aut autem',
      userId: 1
    }
  }
}

export default function fetch(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(res)
    })
  })
}
