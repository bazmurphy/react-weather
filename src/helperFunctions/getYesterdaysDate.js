const formatDate = (date) => date.toISOString().slice(0, 10);

const getYesterdaysDate = () => {
  const today = new Date(Date.now());
  // console.log(today);
  
  const yesterday = new Date(today);
  yesterday.setHours(yesterday.getHours() - 24);
  // console.log(yesterday);

  // const tomorrow = new Date(today);
  // tomorrow.setHours(tomorrow.getHours() + 24);
  // console.log(tomorrow);
  
  return formatDate(yesterday);
}

export default getYesterdaysDate;