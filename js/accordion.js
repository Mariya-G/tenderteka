const blockFaq = document.querySelectorAll(".faq__item");

blockFaq.forEach((item) => {
  item.addEventListener('click', () => {
    const buttonIcon = item.querySelector('.faq__item-icons');
    item.classList.toggle('show-faq');
    buttonIcon.classList.toggle('show-faq');
  })
})