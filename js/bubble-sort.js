// Dãy cần sắp xếp
const input = "5 4 3 2 1";
const numbers = input.split(' ');

// Tối đa chỉ so sánh n - 1 cặp số, vì thế j chỉ chạy tới n - 1
// j là đại diện cho số lượng phần tử đã về đúng vị trí
// mỗi lần chạy hết một lượt trong vòng lặp này
// luôn tối thiểu có 1 số về đúng vị trí
for (let j = 0; j < numbers.length - 1; j++) {
  // Biến đánh dấu có xảy ra sự kiện đổi chỗ không?
  let sw = false;

  // Tiến hành so sánh các cặp số
  // So sánh tối đa n - j - 1 cặp số
  for (let i = 0; i < numbers.length - j - 1; i++) {
    // Nếu phần tử trước lớn hơn phần tử sau
    if (numbers[i] > numbers[i + 1]) {
      // Đổi chỗ cặp số
      const temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;

      // đánh dấu là có sự kiện đổi chỗ
      sw = true;
    }
  }

  // Sau khi so sánh một lượt các cặp, mà không xảy ra sự kiện đổi chỗ
  // tức là dãy đã được sắp xếp, thì ta không cần chạy vòng lặp nữa
  // break luôn để tiếp kiện thời gian chạy
  if (!sw) {
    break;
  }
}

console.log(numbers.join(' ')); // 1 2 3 4 5
