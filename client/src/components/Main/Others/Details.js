export const Details = () => {
    return (
        <section className="vh-auto">
            <div className="d-flex justify-content-center align-content-center">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">Most Visited Products of Wallcovering</h2>
                        <h5 className="text-dark"><i><ion-icon name="location-outline"></ion-icon></i> Milano</h5>
                        <h5 className="text-dark"><i><ion-icon name="calendar-outline"></ion-icon></i> 22.02.2023</h5>
                        <h5 className="text-dark">LIKES: 10</h5>
                        <article style={{ textIndent: "50px" }} className="text-dark p-4 ">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Placeat,
                            provident. Iste quibusdam reprehenderit sequi quisquam repudiandae mollitia. Doloremque
                            aspernatur explicabo vero saepe quidem eligendi pariatur quibusdam repellat, error dolor
                            itaque sint, a officiis quia? Culpa fugit unde inventore sapiente doloribus eius cumque vero
                            numquam animi itaque consequatur, deleniti quaerat cupiditate ducimus, tenetur architecto
                            ullam alias officia minus dolor est? Saepe aliquid reiciendis tempore aperiam blanditiis
                            impedit rem amet voluptatibus quos ipsum eligendi similique cum quia, velit maxime illo
                            omnis unde aut magni, repellendus expedita mollitia. Labore esse voluptatem sunt, quo
                            eveniet, obcaecati amet tempora, asperiores unde eligendi adipisci dolorum doloremque.
                        </article>
                        <div className="d-flex justify-content-center">
                            <a href="/" className="btn btn-success m-2">Like</a>
                            <a href="/" className="btn btn-danger m-2">Dislike</a>
                            <a href="/edit/:postId" className="btn btn-success m-2">Edit</a>
                            <a href="/" className="btn btn-danger m-2">Delete</a>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img className="img-fluid" src="https://lh3.googleusercontent.com/juc_3HiSmoIFi6N8h99L5piKjZb7bUM4Z63C4A2G11szs2R3Di59VsGZa76jDKKW4HshPr1kI7dHWnHDeHNrCg1UenfBExRnJisuxgw4I3PK3M_dCX3oB8Y11TMCeUip2b7gO6seAoxy9xhIR0V-zGXOhy3qbIZuuX4lbuYsoC-QuYdaSOZErAKpp4jYPOzDt9usq08xP-Hoq_jaLllTNjjg-G2IzAJOx-RZALnlfkOceR96zRwsvqgxhFaMScgKPg2Gx0N5nwkcw3Us7F8shTta06_T0prKjxFfTdCxhODdM1iOrXPA8r0ceMOeKhWiFS2afl2bYmKQz6J-vK9O6jReNSsa1lhoHlNq4Rm5tDjDyTOp5df29ym8DekE41xgWB0ZmCU3fJ-obSHIe15Ygiqcs_MLNMnz9RNkXwyRRUi2Qe3hGjkyR0AAuqWPhXreUQ2twvriJeGsQw2_0WNu0kqkjVwbDwOojamlb3pIeqbpKPB5Xu2FAS-6rQNX2Ct-YyqJwZ6Kypi_z-8lwTytZHxGllHKWj786JGUsqbZeuDdS9ry3_5CSBPV7-J6MJUovifm4IR9XcTRtevajNeHl1zYGgcf_b16nVkjUBogz_fvUZXDUsBnSM8rZQv2Ff6AMUA5mlqx57lyWKuCrTSaQYnB46JqCNOYJPGBtyBO34Kk2iPUEfQwloMEbzt8Fiim1R1oirCbsj-rDxlsDvbuADTzGwxMDLLhtLXomgAaC1nilFNcvfsQy-6f0PHFhchokO4vcqpRT1hJI8Sk0OFbQMpqWj-EqLs0kHGOwGM_kncbyHoa9g0khff9kPCjmrij4KQbYuPULTIHZcW1uX5YQa69WxbsHL3Qioap71bBGVhVRGpjsAnWneILcz3WZ-WAu3E0D_2ET1pTphhgoFoIHUU_zABxAxkXqElMvJ9RUXIJ=w2120-h1413-no?authuser=0" alt="post"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};