function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var M=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);M&&M.remove();var e=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);e&&e.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var M,e,N;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,M=document,e=M.getElementById(`scr_${vTurbSrcId}`),(N=M.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,e.parentElement.insertBefore(N,e)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(M,e,N){e=M.getElementById(`scr_${vTurbSrcId}`),(N=M.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,N.style.position="relative",N.style.width="100%",N.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,e.parentElement.insertBefore(N,e)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(M,e,N){e=M.getElementById(`vid_${vTurbPlayer.id}`),(N=M.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,N.style.top="0",N.style.left="0",N.style.width="100%",N.style.height="100%",N.style.position="absolute",N.style.objectFit="cover",N.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,e.appendChild(N)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(M,e,N){e=M.getElementById(`vid_${vTurbPlayer.id}`),(N=M.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,N.style.top="0",N.style.left="0",N.style.width="100%",N.style.height="100%",N.style.position="absolute",N.style.backdropFilter="blur(5px)",N.style.webkitBackdropFilter="blur(5px)",e.appendChild(N)}(document))}function vTurbLoadSmrtvds(){var M,e,N,D;M=window,e=document,M.smrtvds||(N=M.smrtvds=function(){N.callMethod?N.callMethod.apply(N,arguments):N.queue.push(arguments)},M._smrtvds||(M._smrtvds=N),N.push=N,N.loaded=!0,N.version="1.1",N.queue=[],(D=e.createElement("script")).async=!0,D.src=`https://cdn.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,e.getElementsByTagName("head")[0].appendChild(D)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer={"id":"6610892f3d109300085d0946","org_id":"c678e70b-13db-47d3-b046-f3e247d16ff7","name":"vsl_vinicius_final","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"c678e70b-13db-47d3-b046-f3e247d16ff7/players/6610892f3d109300085d0946/thumbnail.jpg","cover_key":"c678e70b-13db-47d3-b046-f3e247d16ff7/players/6610892f3d109300085d0946/cover.jpg","version":"v1","video_id":"66108901ad457000081e579d","options":{"autoplay":"smartplay","smart_autoplay_template":"modern","theme":"#FF0000","foreground_color":"#FFFFFF","video":{"width":1920,"height":1080},"cdn":"cdn.converteai.net","displays":{"big_play":!1,"play_pause":!0,"backward":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[],"pixels":[],"thumbs":[],"headlines":[],"turbos":[],"smart_autoplay_elements":[{"id":"smart_autoplay_element_6610892f3d109300085d0946_0","height":658.6666666666666,"width":677.3333333333333,"x":621.3333333333334,"y":210.66666666666669,"order":1,"opacity":1,"rotation":0,"type":"box","properties":{"color":"rgba(255,0,0,0.75)","radius":32,"border":{"size":1,"color":"transparent","type":"solid"}}},{"id":"smart_autoplay_element_6610892f3d109300085d0946_1","height":84,"width":677.3333333333333,"x":621.3333333333334,"y":762.6666666666666,"order":2,"opacity":1,"rotation":0,"type":"text","properties":{"size":53.33333333333333,"value":"Ligar o Som","color":"#FFFFFF","weight":"700","align":"center"}},{"id":"smart_autoplay_element_6610892f3d109300085d0946_2","height":386.66666666666663,"width":386.66666666666663,"x":766.6666666666667,"y":296,"order":3,"opacity":1,"rotation":0,"type":"image","properties":{"alt":"Ligar o Som","src":"data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgPHBhdGggZD0iTTQwMC43MTEgMjguMzAxOUM0MTkuODUxIDM1LjQ2ODkgNDM3Ljc0NCA0NC4yMDE3IDQ1NC43NjQgNTQuODc5OEM0NzQuMDI3IDY2Ljk2NTggNDkxLjU5IDgxLjA5MjIgNTA3LjYwNCA5Ny4xNTY3QzUyMy45NzEgMTEzLjU3NSA1MzcuOTYyIDEzMS45MjMgNTQ5Ljg4MyAxNTEuNzYyQzU2MS4zNTMgMTcwLjg1IDU3MC40ODMgMTkxLjA2MiA1NzcuMTEgMjEyLjM3NkM1ODIuMTg2IDIyOC43IDU4Ni43MDYgMjQ1LjE1MyA1ODcuOTYyIDI2Mi4yNzJDNTg5LjE4IDI3OC44NzIgNTkxLjM1NCAyOTUuNTU0IDU5MC43MDggMzEyLjEwNkM1ODkuNTA1IDM0Mi45NzggNTgzLjY3MiAzNzMuMTE0IDU3Mi41MyA0MDIuMTk3QzU2NC4wNDYgNDI0LjM0NSA1NTMuMzAxIDQ0NS4xNSA1NDAuMDcgNDY0Ljc3OEM1MjYuODEgNDg0LjQ0OSA1MTEuMDUzIDUwMi4wMDEgNDkzLjQ5MyA1MTcuNzQ3QzQ3Mi42NjQgNTM2LjQyNCA0NDkuNDA4IDU1MS44MDEgNDIzLjkxMyA1NjMuNTE5QzQwMi42MzEgNTczLjMwMSAzODAuNjk2IDU4MS4zMjggMzU3LjQ0OSA1ODQuOTMxQzM0My41NjUgNTg3LjA4MyAzMjkuNTU3IDU4OC40ODggMzE1LjU3NSA1ODkuOTRDMzA4Ljg1MSA1OTAuNjM4IDMwMi4wMzIgNTkxLjIxMSAyOTUuMyA1OTAuOTAzQzI2OS42MzYgNTg5LjcyOSAyNDQuMjgzIDU4Ni41NzYgMjE5LjUzNyA1NzkuMDk5QzIwMS4yOTEgNTczLjU4NiAxODMuNjI0IDU2Ni43NzggMTY2Ljc3OCA1NTcuOTIxQzE0OS4yOTQgNTQ4LjcyOCAxMzMuMDg3IDUzNy42NTQgMTE3LjU0OSA1MjUuMzc4QzEwNi42MDkgNTE2LjczNSA5Ny4wNDg5IDUwNi44MDYgODcuNTcwNCA0OTYuODI0QzcyLjM2NSA0ODAuODEzIDU5LjYwNDEgNDYyLjkwMyA0OC43NTUzIDQ0My41NjVDMzcuODg4NSA0MjQuMTk1IDI4Ljc1OTQgNDA0LjEyNSAyMy4wNzM1IDM4Mi42OTNDMTkuMzM0NiAzNjguNiAxNi4xMjc2IDM1NC4yNTMgMTQuMjIxNCAzMzkuODE3QzEyLjE5OTMgMzI0LjUwMyAxMC45NTg3IDMwOC45MyAxMS4yNDE3IDI5My41MDRDMTEuNjczNiAyNjkuOTY4IDE1LjEwMTkgMjQ2LjcyNSAyMS40Mjg1IDIyMy44OTJDMjYuNzQxOSAyMDQuNzE2IDMzLjg1ODggMTg2LjMyIDQyLjgzOTYgMTY4LjY1N0M1Mi42ODQgMTQ5LjI5NiA2NC4zOTUxIDEzMS4wNzkgNzguODEwMSAxMTQuNzQ4Qzg2LjQ2MTkgMTA2LjA3OSA5My45NTEyIDk3LjE2OTIgMTAyLjQgODkuMzIyMkMxMTkuNDE4IDczLjUxNyAxMzcuOTU4IDU5LjY0NzQgMTU4LjI5IDQ4LjIzNjFDMTc1LjM0MSAzOC42NjYgMTkzLjA3IDMwLjY5OTkgMjExLjY3OSAyNC43MzU1QzIyOS4zNiAxOS4wNjg1IDI0Ny4zMjkgMTQuMzYxMyAyNjUuODk3IDEzLjExMTlDMjgzLjg4IDExLjkwMTggMzAxLjk3NCAxMC41NTQ2IDMxOS45MzUgMTEuMjk1QzM0MC4yNjMgMTIuMTMzIDM2MC40MDIgMTUuODA0OSAzODAuMDM0IDIxLjU0MTlDMzg2Ljg3IDIzLjUzOTkgMzkzLjYwNiAyNS44ODIzIDQwMC43MTEgMjguMzAxOVpNMzg1LjY1NCA3NS45MjY5QzM4NC40NDMgNzUuNDYgMzgzLjIxMiA3NS4wMzczIDM4Mi4wMjMgNzQuNTE5NkMzNjAuNzQ5IDY1LjI1NjkgMzM4LjIxMiA2MS45MTU4IDMxNS4zMDcgNjEuMTQ0NUMzMDEuNzQxIDYwLjY4NzcgMjg4LjEwOCA2MS4zNDQ0IDI3NC41NCA2Mi4xMTUyQzI2NS43NDkgNjIuNjE0NSAyNTYuODYxIDYzLjUyMjggMjQ4LjI5OSA2NS40ODExQzIzMC40MSA2OS41NzI2IDIxMy40NDMgNzYuNDI3OCAxOTYuOTYgODQuNDk1QzE3Ny45OCA5My43ODQ2IDE2MC4xNzEgMTA0LjY1NyAxNDQuMzI2IDExOC45MDlDMTI5Ljc1OSAxMzIuMDEyIDExNS43ODMgMTQ1LjcxMSAxMDUuMDAyIDE2MS45MzZDOTUuNTE3MSAxNzYuMjExIDg3LjcyOTQgMTkxLjcwMSA4MC4xMDMzIDIwNy4xMDVDNjYuOTMwMyAyMzMuNzE1IDYxLjYzNCAyNjIuMzQ4IDYxLjE0OTEgMjkxLjgxMkM2MC45MzI0IDMwNC45ODcgNjIuMTEyIDMxOC4yMDMgNjMuMDc1NCAzMzEuMzdDNjMuNjgyOCAzMzkuNjczIDYzLjk3NjIgMzQ4LjI0NSA2Ni4zMzQ5IDM1Ni4xMkM3MC41NTQyIDM3MC4yMDcgNzUuNDI4IDM4NC4yMTkgODEuNDc4OCAzOTcuNjA2QzkwLjYxMjUgNDE3LjgxNSAxMDEuNTIyIDQzNi45OTIgMTE2LjIgNDU0LjA0MkMxMjguNzQ3IDQ2OC42MTggMTQyLjIyIDQ4Mi4xNTUgMTU3LjQ5NCA0OTMuNTc2QzE3OS43NDcgNTEwLjIxNiAyMDQuNzQ0IDUyMS45MjIgMjMwLjk3OCA1MzEuMTI1QzI1MS4xNzQgNTM4LjIxMSAyNzIuMTgxIDUzOS43NjEgMjkzLjE4MSA1NDAuNzc1QzMwNS4xNDQgNTQxLjM1MyAzMTcuMjM3IDUzOS45MjIgMzI5LjIzMiA1MzguOTIxQzMzNy44NDQgNTM4LjIwMiAzNDYuNTM5IDUzNy4zNDMgMzU0LjkzNiA1MzUuNDE0QzM3NC4zMSA1MzAuOTY0IDM5Mi4zOTYgNTIyLjg2MiA0MTAuMjQgNTE0LjI5M0M0MjYuMDI4IDUwNi43MTEgNDQwLjUwNSA0OTcuMjA2IDQ1My45MjQgNDg1LjgxNEM0NjguOTM3IDQ3My4wNzEgNDgyLjM0NiA0NTguOTgyIDQ5NC4yNiA0NDMuMzdDNTA2LjE3OSA0MjcuNzUxIDUxNC42NzggNDEwLjI0NiA1MjIuOTA1IDM5Mi41MzVDNTM1LjM2NiAzNjUuNzA3IDU0MC4zNDkgMzM3LjI4MyA1NDAuODQ1IDMwOC4wMzFDNTQxLjA4IDI5NC4xOTIgNTQwLjEwMSAyODAuMjg1IDUzOC44NCAyNjYuNDg0QzUzOC4wMzEgMjU3LjYyOSA1MzYuNDU2IDI0OC42ODcgNTMzLjkxNSAyNDAuMTc1QzUyNi41ODIgMjE1LjYwNiA1MTYuNzQ4IDE5Mi4yNjggNTAyLjIyOSAxNzAuNzI4QzQ4OC4wNzcgMTQ5LjczMiA0NzEuMzE3IDEzMS4zODkgNDUyLjMyNSAxMTUuMDI4QzQzMi43NTEgOTguMTY0IDQwOS4zOTYgODcuMzQxMSAzODUuNjU0IDc1LjkyNjlaIiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgIDxwYXRoIGQ9Ik0yMDcuMDAyIDQ0NS40MzlDMjA3IDM0OS41MDMgMjA3LjE0MSAyNTQuMDEyIDIwNi43NDYgMTU4LjUyNEMyMDYuNzEzIDE1MC40MDUgMjEzLjQ2NSAxNDcuMjQzIDIxOS42NTQgMTUwLjg5N0MyMzUuMzIyIDE2MC4xNDcgMjUxLjA5IDE2OS4yMjkgMjY2Ljg0OCAxNzguMzI2QzI4MC44OTYgMTg2LjQzNCAyOTUuMDE1IDE5NC40MTYgMzA5LjA0NyAyMDIuNTUxQzMzMS41MTIgMjE1LjU3MyAzNTMuODk2IDIyOC43MzQgMzc2LjM3OSAyNDEuNzI1QzM5NC45NSAyNTIuNDU3IDQxMy42MTkgMjYzLjAyMSA0MzIuMjM2IDI3My42NzVDNDQzLjA5MiAyNzkuODg3IDQ1My45ODggMjg2LjAzMyA0NjQuNzU2IDI5Mi4zOTVDNDcxLjA3NCAyOTYuMTI4IDQ3MS4yNzEgMzAzLjY2NSA0NjUuMDQgMzA3LjQwMUM0NTEuMTA2IDMxNS43NTQgNDM3LjAxNyAzMjMuODQ5IDQyMi45NjIgMzMxLjk5OUM0MDUuMjUgMzQyLjI2OCAzODcuNTA2IDM1Mi40ODQgMzY5Ljc4IDM2Mi43MjlDMzU1LjU3MyAzNzAuOTQxIDM0MS4zNiAzNzkuMTQxIDMyNy4xNzEgMzg3LjM4NEMzMDIuMyA0MDEuODMzIDI3Ny40ODkgNDE2LjM4NiAyNTIuNTY0IDQzMC43NDJDMjQwLjkwMyA0MzcuNDU5IDIyOS4wNiA0NDMuODYzIDIxNy4yNTEgNDUwLjMyQzIxMi40ODQgNDUyLjkyNiAyMDkuMTQ2IDQ1MS4zOTMgMjA3LjAwMiA0NDUuNDM5WiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPC9zdmc+CiAg"}}],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!0,"fake_bar":!0,"headline":!1,"turbo":!0,"turbo_speed":1.2,"turbo_auto_test":!1,"smartplay_options":{"top_text":"Seu v\xeddeo j\xe1 come\xe7ou","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","background_color":"rgba(61,133,198,0.99)","start_at":171,"end_at":423,"animation":{"animation":"pulse","properties":{"speed":6}},"custom_preview":null},"playback_options":{"action_after_finish":{"type":"loop","properties":{"start":0}},"scroll_to_action_in":null},"resume_options":{"play":"Quer continuar assistindo de onde parou?","title":"Voc\xea quase perdeu os 6 indicadores. ","replay":"Assistir do in\xedcio?","disable_pause":!1,"foreground_color":"#DA0F0F","background_color":"rgba(255,255,255,0.58)"},"fake_bar_options":{"height":22,"alpha":2,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":null}}},vTurbSrcId="6610892f3d109300085d0946",vTurbPlayer=vTurbOriginalPlayer,vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds();