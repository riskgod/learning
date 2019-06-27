var (
    a int
    b string
    c []float32
    d func() bool
    e struct {
        x int
    }
)

hp := 12

// 异或 交换变量
var a int = 100
var b int = 200
a = a ^ b
b = b ^ a
a = a ^ b

fmt.Println(a, b)

// 多重赋值
var a int = 100
var b int = 200
b, a = a, b
fmt.Println(a, b)

// 匿名变量，这里的_ 不接受变量
func GetData() (int, int) {
	return 100, 200
}

a, _ := GetData()

fmt.Println(a);

//3.14
fmt.Printf("%.2f\n", math.Pi);
