export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:{"content-query-IFlLHFvt3q":{_path:"\u002Flegacy-articles\u002F2020-08-21-migrated-blog-environments",_dir:"legacy-articles",_draft:d,_partial:d,_locale:"en",_empty:d,title:e,description:f,excerpt:{type:g,children:[{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:j}]},{type:a,tag:c,props:{},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:l}]},{type:a,tag:c,props:{},children:[{type:b,value:m}]},{type:a,tag:c,props:{},children:[{type:b,value:n},{type:a,tag:o,props:{},children:[]},{type:b,value:p}]}]},title_en:q,slug:"migrated-blog-environments",aliases:[e,q],created_at:"2020-08-21T11:39:02.000Z",published_at:r,updated_at:r,tags:[],moc:["Announcement"],body:{type:g,children:[{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:j}]},{type:a,tag:c,props:{},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:l}]},{type:a,tag:c,props:{},children:[{type:b,value:m}]},{type:a,tag:c,props:{},children:[{type:b,value:n},{type:a,tag:o,props:{},children:[]},{type:b,value:p}]}],toc:{title:f,searchDepth:s,depth:s,links:[]}},_type:"markdown",_id:"garden:legacy-articles:2020-08-21-migrated-blog-environments.md",_source:"garden",_file:"legacy-articles\u002F2020-08-21-migrated-blog-environments.md",_extension:"md"}},prerenderedAt:void 0}}("element","text","p",false,"將部落格搬到新的魚缸 (?)","","root","原本架設部落格的 VPS 是 6 年前建立的，Ubuntu 版本已經滿舊的，而 WordPress 使用的 Image 中 PHP 版本也過舊，舊到 WordPress 的 Console 都出現警告，所以乾脆就重新架設。這次實作了一些修改了一些架構，這邊做個紀錄分享。","原本是在 VPS 上直接安裝 nginx，設定檔都是放在 VM 上；然後透過 Docker 搭配 Docker-Compose 去架設 WordPress 和 Database，並將 WordPress 的 Port 映射到 Host (VM) 上，最後由 nginx 進行 reverse proxy。","這樣的架構缺點是，nginx 與 VPS 上的連結性是強的，我如果想要換 VPS 或是進行備份，都會是相對麻煩的。另外 WordPress 的 Port 映射到 Host 上，在安全性上是沒那麼好的做法，用 reverse proxy 其中一個目的就是不希望使用者知道 service 實際 IP 和 Port，但原有的設計卻還是將 Port 公開出去，是有點矛盾的做法，雖然應該也能透過網路設定讓只有 local 可以連線，但若是只專一將連線只開放給 nginx 會更好。","新的做法改用我一直很想嘗試的事情，就是 Dockerize nginx service ，這樣 nginx service 就可以和 VM 切開。網路部分就善用了 docker-compose 2 推出的 network 設定，讓 nginx 自己一個 network，並且讓有需要對外連線的服務加入這個 network，這樣對 nginx 就能透過 reverse proxy 將該服務對外連線，達到只將連線方式只開放給 nginx 的目的。","另外，也嘗試了 VPS Provider 提供的 Volumes 功能，將 nginx 與 wordpress 等 services 的資料都存在另外掛在 VPS 的 Volumes 上。這樣未來想要直接將 VPS 砍掉重練也非常容易，因為 Volumes 是可以隨時掛卸載的。而且 Volumes 是可以單獨做 Snapshot，這樣就比較節省空間資源，又可以只針對重要資料做備份了。","原本也有在考慮要不要趁機玩 Kubernates，但是會發現有點殺雞用牛刀的感覺，而且這把牛刀的價格還不便宜，所以就作罷了。","大概是這樣，這邊主要是個紀錄。","br","\n相關技術細節有機會再另外寫一篇文章分享。","Migrated Blog Environments",null,2))