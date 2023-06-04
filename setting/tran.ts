import fs from "fs";
import _ from 'lodash';

function getPoFiles(dir: fs.PathLike, files: string[] = []) {
    const dirFiles = fs.readdirSync(dir);
    dirFiles.forEach((file) => {
        const filePath = `${dir}/${file}`;
        let last = ['po', 'js', 'ts', 'jsx', 'tsx'];
        if (fs.statSync(filePath).isDirectory()) {
            getPoFiles(filePath, files);
        } else {
            files.push(filePath);
        }
    });
    return files;
}

// let files = getPoFiles("/Users/zdc/Documents/project/chain/gmx-interface-new/src");
let localpath = `/Users/zdc/Documents/project/chain/gmx-stats/src`
let files = getPoFiles(localpath);

let replaceList = [
    {
        from: new RegExp("GMX", "g"),
        to: "EDDX"
    },
    {
        from: new RegExp("Gmx", "g"),
        to: "Eddx"
    },
    {
        from: new RegExp("gmx", "g"),
        to: "eddx"
    },
]

let replaceList1 = [
    {
        from: new RegExp("GLP", "g"),
        to: "ELP"
    },
    {
        from: new RegExp("Glp", "g"),
        to: "Elp"
    },
    {
        from: new RegExp("glp", "g"),
        to: "elp"
    },
]

files.forEach(p => {
    var data = fs.readFileSync(p, "utf-8");
    var newData = data.split("\n").map(p => {
        replaceList.forEach(replace => {
            p = p.replace(replace.from, replace.to);
        })
        replaceList1.forEach(replace => {
            p = p.replace(replace.from, replace.to);
        })
        return p;
    })
    fs.writeFileSync(p, newData.join("\n"), "utf-8");
});


// 递归获取指定目录下的所有文件夹和文件
function getFiles(path: string): string[] {
    const files = fs.readdirSync(path);
    let fileList: string[] = [];

    files.forEach(file => {
        const filePath = `${path}/${file}`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            fileList = fileList.concat(getFiles(filePath));
            fileList.push(filePath);
        } else {
            fileList.push(filePath);
        }
    });
    // 返回倒叙
    return fileList;
}

getFiles(localpath).forEach(p => {
    let prefix = localpath + "/";
    let _path = p.replace(prefix, "");
    let split = _path.split("/");
    let last = _.last(split)!;
    let newPath = last;
    replaceList.forEach(replace => {
        newPath = newPath.replace(replace.from, replace.to);
    })
    replaceList1.forEach(replace => {
        newPath = newPath.replace(replace.from, replace.to);
    })
    if (newPath !== last) {
        split[split.length - 1] = newPath;
        console.log(p, `${prefix}${split.join('/')}`)
        fs.renameSync(p, `${prefix}${split.join('/')}`);
        // console.log(split.join('/'))
    }
    // let split = p.replace(prefix, "").split("/");
    // split.forEach(path => {
    //     // console.log(path);
    //     let newPath = path;
    //     replaceList.forEach(replace => {
    //         newPath = newPath.replace(replace.from, replace.to);
    //     })
    //     if (newPath !== path) {
    //         // fs.renameSync(`${prefix}${newPath}`)
    //         // console.log(newPath, path);
    //     }
    // })
})


// console.log(getFiles("/Users/zdc/Documents/project/chain/gmx-interface-new/src"))