class MySuperClass {
  // 매개변수는 생성자 내에서만 쓸 수 있는 로컬 변수다. 그래서 이 클래스 내의 함수에서는 못 쓴다.
  // 원래 로컬 변수에 접근제한자는 못 붙인다(어차피 로컬 변수는 밖에서 접근 못한다). 생성자에 한해서만 매개변수에 접근제한자를 붙이면 자동으로 멤버 변수가 된다. 그래서 클래스 내에서 사용할 수 있게 된다.
  // 그러면 MySuperClass 클래스의 멤버 변수는 총 6개다.
  constructor(
    public id: string,
    private age: number,
    protected address: string
  ) {}
  email = "a@a.com";
  private phone = "1111";
  protected url = "http:.www.google.com";
  func1() {
    // this.id의 값은 클래스가 생성될 때 인수로 전달되는 값에 의해 결정
    console.log(this.id, this.age, this.address);
  }
}

let superObj = new MySuperClass("kim", 10, "seoul");
superObj.func1();
superObj.id = "hello"; // public이라 에러 안 남
// superObj.age = 20; // 에러 난다. private이라 에러 남
// superObj.address = "Busan"; // protected라 에러 난다.
class SubClass extends MySuperClass {
  func2() {
    this.id = "hi"; // public이라 사용 가능.
    this.url = "~~~"; // protected는 하위에서 사용 가능
    // this.phone = '1111' // private은 하위에서도 사용 불가능.
  }
}
