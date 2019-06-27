function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}


function light(timmer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, timmer);
    });
};

function step() {
    Promise.resolve().then(() => {
        return light(3000, red);
    }).then(() => {
        return light(3000, green);
    }).then(() => {
        return light(1000, yellow);
    }).then(() => {
        return
    })
}

// step()

Promise.all([Promise.resolve(1), Promise.resolve(2)])
    .then(([x, y]) => {
        console.log(x, y)
    })

//优化 async 等待效率问题解决方法1
async () => {
    const fun1 = syncfun1();
    const fun2 = syncfun2();
    await fun1;
    await fun2

}
//优化 async 等待效率问题解决方法2
async () => {
    Promise.all([fun1(), fun2()]).then(
        //后续操作
    )
}



//并发处理url接口请求
async () => {
    const res = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
    return "all done";
}
//并发处理url接口请求 解决方案2
async (urls) => {
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });

    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }
}