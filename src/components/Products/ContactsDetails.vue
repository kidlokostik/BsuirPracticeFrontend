<template>
  <div class="contacts-details">
    <h3>{{ contact.name }}</h3>
    <p>Адрес: {{ contact.address }}</p>
    <p>Телефон: {{ contact.phone }}</p>
    <p>Email: {{ contact.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContactsDetails',
  data() {
    return {
      contact: {
        name: 'Пиццерия "Pinguinos de madagascar"',
        address: 'ул. Бобруйская, д. 6',
        phone: '+7 (123) 456-7890',
        email: 'info@pinguinos.com'
      }
    };
  }
};
</script>

<style scoped>
.contacts-details {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-info p {
  margin-bottom: 10px;
}
</style>
