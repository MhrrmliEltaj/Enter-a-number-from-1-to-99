function second(num2) {
  switch (num2) {
    case '0':
      return " ";
    case "1":
      return "bir";
    case "2":
      return "iki";
    case "3":
      return "üç";
    case "4":
      return "dörd";
    case "5":
      return "beş";
    case "6":
      return "altı";
    case "7":
      return "yeddi";
    case "8":
      return "səkkiz";
    case "9":
      return "doqquz";
  }
}

function first(num1) {
  switch (num1) {
    case "1":
      return "on";
    case "2":
      return "iyirmi";
    case "3":
      return "otuz";
    case "4":
      return "qırx";
    case "5":
      return "əlli";
    case "6":
      return "altmış";
    case "7":
      return "yetmiş";
    case "8":
      return "səksən";
    case "9":
      return "doxsan";
  }
}

function numbers() {
  let num = prompt("1-dən 99-a qədər ədəd daxil edin:");
  if (!num || num.length > 2) {
    return;
  }
  if (num.length == 2) {
    console.log(first(num[0]), second(num[1]));
  }
  if (num.length < 2) {
    console.log(second(num));
  }
}

numbers();
