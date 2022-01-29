import axios from 'axios'

export const contactForm = async (data) => {

  let response;
  const contactData = new FormData();
  Object.keys(data).forEach((key) => contactData.append(key, data[key]));

  await axios.post(`${process.env.NEXT_PUBLIC_INTRANET_URL}/banao/lead-create/`, contactData)
    .then((res) => {
      response = res;
    })
    .catch((err) => console.log('Error while sending data', err))

  return response;
}