const paginate = (data) => {
  const dataPerPage = 9;
  const numPages = Math.ceil(data.length / dataPerPage);
  const newData = Array.from({ length: numPages }, (_, index) => {
    const start = index * dataPerPage;
    const end = start + dataPerPage;
    return data.slice(start, end);
  });

  return newData;
};

export default paginate;
