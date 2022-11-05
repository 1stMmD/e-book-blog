import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {BookRef , BannerRef} from "./index";

const CategoryBox = ({header , data , type}) => {
    const array = Array(10).fill({
        name:"خون, عرق و پیکسل ها",
        author:"جیسون شرایر",
        cover: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAUAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAADBAUAAgYBB//EADgQAAEDAwIDBgUCBQQDAAAAAAECAwQABRESIRMxQQYiUWFxgRQykaHwFUIjM1Jy0bGywfElQ2L/xAAaAQACAwEBAAAAAAAAAAAAAAAEBQECBgMA/8QAMhEAAQMCBAQDBwQDAAAAAAAAAQIDEQAEBSExQRITUWEigZFxobHB0fDxIzJCUgYUM//aAAwDAQACEQMRAD8ARjtMukh6QlnfYlOQef570ZuNEU44hc9KAlRCVFGQoZG/3P0ra2LI4qBJaYCikFTnPry3p9ya5qSgTIShzyABjGVf1eJI3p4SZyrLJSIk0iYUMBP/AJRnUcbBBONt8/f6UN+NGbby1NbeXjOEjH+tVA6Wmm2xcICkoOlOE528Tkj88KEqW4ppEwyoZdS3syEDO5zjnz26VAUasUpj7+tKNw4a0KP6i2jGcAoOTivDCijVm4NYTyITnPP/AB9xQJkt2YpsuhHcToSEJxtnr4mnbfZlvx/jJToYhgZK+aiPIVyublu2RzHlQPvSrMMLuF8DSJNTi3qfLTGXe9pSUjdXtT7tqRDYD12nMQdXypc7yj7Ct2pFolTW4drkS7dOT/IkY1B3yUK8vK2FvIhdroYDyv5cyEvZzHQjmPzlSK5xh5biUMgpGpy8UdgciPU9qfW2CIQVC4zVpA0nvvQ5NodbjiTGcblxSM8Zk5AHmOlKSWCwtI4jbiVJCkraVqSoHwNMO3jgx/g7PHTBi+CPnV5k+P5mo1uacZL4cBGpeR50dhlxdvH9bQdsz0nYH2VTGcFbw9pKyYUradKqxJhilWGGHdRB/iozjFeS5apKWwWm29Ax3BjOwG/0pc862Q2tedCFK0jJ0jOBTc8IzNZwFR8IrWixGBKktscZlpSzgF1YSCfDzPlTMG3tXKLrt01p+Qn+ZHPdWn0zzpZ3s9cLl/DS3wEtry44/wB0JH/NAu4hb8tfC4EkddvI6/OjWrF3moStBg9KrXIwuzbZ4kFc1/G63hpbx1Cee9aNQnY8M3iwSXrchZKnIU8YQv0z49KR/V5FkkNQWZyLrFUP/e18ih/Sc7il5kyVcHuJKdUtXTPJPoKzKWLp8gqMzmSZMjpwnIfKt2xYW6WypQDSUa9Z11ptrtIXGFOwYDEKS53XnWxkn022FSn2VSnUuuuKK0q1ZUclXrT9oi2pCHVy5YQGlZMdAJWc7/T82qu6Y15goR2fVGLbe646kBLwPjk/nnRaTa2Vxw8BiYJzge0n8d64u3rz1jFukJkTxHVRGeQ+vpXPpSBW1FdZQhoKS8lTgUUOs4KVtKHQg7+/KhVp2VNqRLelYO6W+t0quCSrvRIzsBEttNzecZZVnvJTnfzPT1xXZsJTGaQ5B0fB6hw0RE8RT39yjsB+Zr59PifFJSArSpOcZ5Gl7Y/cbbJLLTzzLboIUEK7qvz60ixnDXrrxJXkNjp+fWn2AvMpWG4HEoxNdP2httqaDkrUuFdVKKwiK7qwemeQHt96jpu1wuUNpMyStwJ2wds48cczWuOa1kjqfE1YhMLbQ1cbGI11Sjd6OpOhxJ8QD1/N6ESwi1YBuDJ/jPwBOnma0Ll4za3MWULIB4jsDlBjeM9KXj2KRIjmS8htppG6XHjpyfKhxrmvs/cY7sqOeA6ClYWjcJ27yfzeuiiXm23NS3UOpYntndqfn+B46RyPtvUq93OA8y40GhNWQcyZQzp/sH7fbFDNYi+9xW7rXhOXQjz3+4Fczhrl4sXKXCpQMn+vpt8ad7SyLTBjty121uZ8T3kvNYaynp3huTjyrjZKGBIYlWZuSwjYnU7lSd+hG+OdCtzjEtkxCtS+FnlnGCc7GqLLSI7YQk90bAk00w3DOSjNZIk77ezSgMQxNllIbAlQAIGwJIJ92VLtR3U3BT6t0rTzPPNO0NaynJG4A3rZC0rGUmnjRQn9NJ0rL3jjtw4bhYjizorLLsh0NsNqcWeSUirCLEhALct1Spah3Y8cBSh/cTsB9PWuclTptudRJgOuNEEhRTuD5EdRViD2pRMSE3ILZDiCoohpCeMoHB1Kzkfm9JcXev0GGMk9tfxTnA8PtbjxO5nptrFEefudriJY7RwETbfjSmTH+dryz/16mtu0na1EWHDesT6XHTstTrOcjHXODnI6UrOvD0hgxIaExIhyA00MZzzyanwbW68yllDCpOP6UZFLbbDxcAO3IAgnKfDn1ByB9hp5fIbw4FKj4iMgNciI0oU79Wu05m6PKi8BKAlWSAsk52Skb7DqaBMU7xm4zKQpT22SPE4q1DajoJZlOpZdbOEJVgBShgYJ6CiKivyUpTxlNraBCVpIJOCNlEbHcHl5U4bZQlAQgezoBSpGM3DoJ/aicwNTtXrFnjtI0RtIcCUlYV12xq+1SrCiFdL4iFdHXURivKcDB26eYx71RaiTnnYr63W1tKxrGdJwa5tfEtl1UpQcbWkrDWpOSokEJx48xULQ4lkpFc33mXX+Y2mI0r7Nd+z9nu9uIjskOtoCY62UBvKeid9iB51wdw7NzbU88XilTbaUgqTvg4zg+eN6L2L7Xz3SuHdQpYUyQ2+k4WjBxsnONvDyrtHn7YmKy+5cH5JKUpUEoAWtSQASoHYVDaXUKSqKq7ynGylRivmp8+VNRezUqXoktNBpKQdAWdOvPQCl03I2viSUx2X1ISdIdBIB8aYtXaeVLjg3ZDcttaicaQgt7/tI5fm9exO6ukgpYQDG5+Q+prpgeEuOqS6FkEiRHYx8aC58Ra3sqa4bze+lxAIPsedG7LdrJUmQ+m9zG/guGSU8LGPJOnl71Rk3J+9NfAWe3LkNo2cmztkteIB6kfmahz4kd1b8S3SW5ZQjvrYSSlP0/wCKXgtYk2UPoCVxp079vPOjOL/UcShwkpBVKjrnoDuYNHt6pvaTtA9c2YKGYKUlKVupCUAA8yeqvHnXROW+BbbdEEF3Wl3J1ZBSrO+R5f5r59epc4RI9u+JeVGbb2bz3T7eFdo5f4j36fBtVsXNuDTWGkO91DWwBUd8HkP8iocdvLQthH/MTkOg6k1R2xbc5h1OWfc9AKMlvgpSnSUgDbNRp9ulS5rq4ry4gSUq4hWVBxWNsJ6eZp+RLTbJiT2muTsue8AEw4g0tsg/T88aJNjOfA/qFvmKdidQrZad8Y86OYxRl/hS54eLQ/xJ6A/falr1g+whTyBKRr29opS2wEJLL76XmnWC4NId1BWrmdRHLrypqVcGmmeGjvr1E7HYUkwpt8JS8pbjhPy5O9BltIaKQgEcwc+PvThLaQYpU5cLUJpZ1CXAULSFJPMHrWaUhIASAByArY86yuikJUIIrkzcusrSpCiI0zoMqfIuzjsK43RyJAjoTswxkHb9wBGfv6Vf7HR7Ra7fPu0OXIktNDStbjOjkMkJHuKgPx0utuJSAlTgwVAc9qBGjuxYTsJMhZaePfA2B5dM+VZy+wpfKLbZhJjIRB695862Vpe2l86FftVCiZ7HKNtKeF0t1xe4Frt1yelOKyFEpPPqQOlZOsU22zRLfSpI0aQU7gb/ANQ61dsNxt8eIiLCQ1bHQQSoo1od2/co7/ejz7oxayprdElwgfBtjjtvE+AHy538PQ0tOJPoc5PLJT3JJ9dI9e8UazhrtovmAhKsjEZGOvqcxUY31Ji6bzDRcGmRrQV7LSR5/nvUhfaW43ea2ztHhJ5RmBhIGNsnr/pVa6QU/CvyrqmNa0ukhmJxCtax7cs+lKQ4YA4cdvSkfNpSTjzON6bYbZ2jh5yBp7j22nuKU47ifEOBKOEmZGx703CaC+8GlEpPzDJ39MGvJ47yPDB6enkKYZZKEJaU2VHfOGzn/Znnil54wpGUkA5306c/YU/B8VZMiE0FhlyQ+hllOpxZwkZxmitQJTqYqkMkplauASoAL0nCuu2POmrPx21OyWISH1NfK4t3RoVg+Y1bZ28qc+IuAi2tHwTaW43fjlDulZGjKs4ORkDV05daqpZBgVZLaSJNTE2uYoPFLSVBn5yHUY+XVtv3thnbNDkwJUVpLkhkoQvTpJI3ynUPtVv4i4Oolvi2tlKgFgl0AoyyRnnlZKDn13oF0euUuFFiyI7YSkcRrDqVK0paB3GcgaQVb+JqoWqYMVYtpAkTNc+pvqNq2sMyRZpsiQGmlcRfJYBJT68xT6rROS6losoDiklQTxm9gBkk97bbffFKyGHI7y2X0aHEHCknoaFuLFl9Ckjen9l/kVw0UJuxxoT66RrWl/iWq4a7q1PcjS9QK48kqcCz4IO59uXpVC3WpyZJDLzgjZAUA4MKWP8A5HWokyIX0IShenSsK+lW4t8dSgR7i2Jcccgv50+iqUupvLG35bOfSdh26+dN04dY4u+XGFSlO2hz+n2aoyLVrCkW1xC3G9lMPspQ56jI3/N6hSA4hwoeb4a07FOjTit712vZPCgW1hxakLA+KknK0HP7cb+WTU+C9JkB96Y4644t4kKdJJIwMe1E4M7eqEXOm06+780ixmytWU8bBgzBFWLdcVW9MhBZDodGClaiE5wR3k9efl61u3dQ2/HktxUplNI0F3iHvYRoG3TbHqR0rKynfAk50i5ihlOlHPaKSpp9soBL6AlxWrBOG9GeW3LP2oL93DrrDwjYdajlgku5CgWy3yxtzzWVlQG0javF1Z1NFevylTEzGo/Dkhks6i7qGCnAIGOm561NnSTMmPSSnSXVlZTnOM+de1lSlCU5ioU4pWRNArUpBr2sqVJChBqWXnGVhbaiCNxSrVvYbeU8RrcUonvft9KbrKyvJSEiBXnXVuqK1mSa/9k="
    });

    return (
        <Box
        dir="rtl"
        sx={{
            width : type === "bookPage" ? "80vw" : "90vw",
            display : "flex",
            flexDirection : "column",
            mt :  type === "bookPage" ? 0 : 3,
        }}>
            <Typography
            component="h3"
            sx={{
                mb : 2,
                fontSize: type === "banner" ? {
                    xs : "1.5rem",
                    md : "1.9rem",
                    lg : "2.3rem"
                } : {
                    xs : "1.2rem",
                    md : "1.5rem",
                    lg : "1.7rem",
                },
                fontWeight:"600",
                color:"black.dark",
            }}>
                {header}
            </Typography>

            <Box
            component="div"
            sx={{
                width:"100%",
                overflowX : "auto",
                display:"flex",
                gap:"max(20px,3vw)",
                scrollSnapType:"x mandatory",
                p : "5px 0",
            }}>
                {array.map((item , idx) => {
                    return type === "banner" ? 
                                <BannerRef key={idx}/> :
                                <BookRef
                                key={idx} 
                                author={item.author} 
                                name={item.name}
                                cover={item.cover}/>
                })}
            </Box>

            
        </Box>
    );
}

export default CategoryBox;
