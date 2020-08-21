let regular = {
  name: /^(王|李|张|刘|陈|杨|黄|赵|吴|周|徐|孙|马|朱|胡|郭|何|高|林|罗|郑|梁|谢|宋|唐|许|韩|冯|邓|曹|彭|曾|肖|田|董|袁|潘|于|蒋|蔡|余|杜|叶|程|苏|魏|吕|丁|任|沈|姚|卢|姜|崔|钟|谭|陆|汪|范|金|石|廖|贾|夏|韦|傅|方|白|邹|孟|熊|秦|邱|江|尹|薛|闫|段|雷|侯|龙|史|黎|贺|顾|毛|郝|龚|邵|万|钱|覃|武|戴|孔|汤|庞|樊|兰|殷|施|陶|洪|翟|安|颜|倪|严|牛|温|芦|季|俞|章|鲁|葛|伍|申|尤|毕|聂|柴|焦|向|柳|邢|岳|齐|沿|梅|莫|庄|辛|管|祝|左|涂|谷|祁|时|舒|耿|牟|卜|路|詹|关|苗|凌|费|纪|靳|盛|童|欧|甄|项|曲|成|游|阳|裴|席|卫|查|屈|鲍|位|覃|霍|翁|隋|植|甘|景|薄|单|包|司|柏|宁|柯|阮|桂|闵|欧阳|解|强|丛|华|车|冉|房|边|辜|吉|饶|刁|瞿|戚|丘|古|米|池|滕|晋|苑|邬|臧|畅|宫|来|嵺|苟|全|褚|廉|简|娄|盖|符|奚|木|穆|党|燕|郎|邸|冀|谈|姬|屠|连|郜|晏|栾|郁|商|蒙|计|喻|揭|窦|迟|宇|敖|糜|鄢|冷|卓|花|艾|蓝|都|巩|稽|井|练|仲|乐|虞|卞|封|竺|冼|原|官|衣|楚|佟|栗|匡|宗|应|台|巫|鞠|僧|桑|荆|谌|银|扬|明|沙|薄|伏|岑|习|胥|保|和|蔺|水|云|昌|凤|酆|常|皮|康|元|平|萧|湛|禹|无|贝|茅|麻|危|骆|支|咎|经|裘|缪|干|宣|贲|杭|诸|钮|嵇|滑|荣|荀|羊|於|惠|家|芮|羿|储|汲|邴|松|富|乌|巴|弓|牧|隗|山|宓|蓬|郗|班|仰|秋|伊|仇|暴|钭|厉|戎|祖|束|幸|韶|蓟|印|宿|怀|蒲|鄂|索|咸|籍|赖|乔|阴|能|苍|双|闻|莘|贡|逢|扶|堵|宰|郦|雍|却|璩|濮|寿|通|扈|郏|浦|尚|农|别|阎|充|慕|茹|宦|鱼|容|易|慎|戈|庚|终|暨|居|衡|步|满|弘|国|文|寇|广|禄|阙|东|殴|殳|沃|利|蔚|越|夔|隆|师|厍|晃|勾|融|訾|阚|那|空|毋|乜|养|须|丰|巢|蒯|相|后|红|权逯|盖益|桓|公|万俟|司马|上官|夏侯|诸葛|闻人|东方|赫连|皇甫|尉迟|公羊|澹台|公冶|宗政|濮阳|淳于|单于|太叔|申屠|公孙|仲孙|轩辕|令狐|钟离|宇文|长孙|慕容|鲜于|闾丘|司徒|司空|亓官|司寇|仉|督|子车|颛孙|端木|巫马|公西|漆雕|乐正|壤驷|公良|拓跋|夹谷|宰父|谷粱|法|汝|钦|段干|百里|东郭|南门|呼延|归海|羊舌|微生|帅|缑|亢|况|郈|琴|梁丘|左丘|东门|西门|佘|佴|伯|赏|南宫|墨|哈|谯|笪|年|爱|仝|代)\s*[\u4e00-\u9fa5]{1,3}/,
  phone: /^[1][3,4,5,7,8][0-9]{9}$|^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,
  postalCode: /\b[0-9]{5}(?:-[0-9]{4})?\b/,
  email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  id: /\d{17}[\d|x]|\d{15}/,
  id18: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  id15: /(1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])[0-9]{4}[1-9][0-9]((01|03|05|07|08|10|12)(0[1-9]|[12][0-9]|3[01])|(01|04|06|09|11)(0[1-9]|[12][0-9]|30)|(02)(0[1-9]|[12][0-9]))[0-9]{3}/,
  ipAddress: /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
  chinese: /[\u4e00-\u9fa5]/,
  url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
  rankCard: /\d{16,19}/,
  mobilePhone: /^[1][3,4,5,7,8][0-9]{9}$/,
  address: /^([\u4E00-\u9FA5A-Za-z0-9_]+(国|省|市|区|县|道|路|街|村|镇|队|沟|屯|园|号|桥|寺|苑|院|坝|庄|庙|渠)){2,}$/,
  hostName: /\b(([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])\.)+([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])\b/,
  doubleByteChar: /[^\x00-\xff]/,
  floatChar: /[1-9]\d*.\d*|0\.\d*[1-9]\d*/,
  intChar: /-?[1-9]\d*/,
  QQNumber: /[1-9]([0-9]{4,10})/
}

/**
 * 李青逸编写于2020/05/20 《正则字典》
 * name -- 中文名字
 * phone -- 手机号和电话号通用
 * postalCode -- 邮政编码
 * email -- 电子邮箱
 * id -- 身份证
 * id18 -- 18位身份证
 * id15 -- 15位身份证
 * ipAddress -- ip地址
 * chinese -- 中文字符
 * url -- url地址
 * rankCard -- 银行卡
 * mobilePhone -- 手机号
 * address -- 住址(需要满足2个以上的地址属性，例：三元村嘎达屯)
 * hostName -- 主机名
 * doubleByteChar -- 双字节字符，即汉字
 * floatChar -- 浮点数
 * intChar -- 整数
 * QQNumber -- QQ号
 */
module.exports = regular;