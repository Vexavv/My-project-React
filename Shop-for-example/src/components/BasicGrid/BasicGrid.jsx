import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import './BasicGrid.scss'
import SliderAbout from "../SliderAbout/SliderAbout";


export default function BasicGrid() {
    return (
        <Box sx={{flexGrow: 1}} padding='0 10px'>
            <Grid container spacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid xs={12}>
                    <div className='First'>
                        <h2 className='First-title'>TITLE</h2>
                        <div className='First-container'>
                            <img className='First-container_img' src="./img/img-about/img1-about.jpg" alt="anything"/>
                            <p className='First-container_text'>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Amet cum delectus dolorem eum iure mollitia
                                odit quo, saepe veniam. Autem consectetur consequatur consequuntur distinctio dolore
                                doloribus eaque
                                earum eligendi error eum ex, expedita explicabo facere fugiat harum hic labore laborum
                                laudantium magnam
                                maxime minima natus nemo numquam odit pariatur quae quasi quisquam quo recusandae rem,
                                reprehenderit
                                sequi suscipit tempora tempore tenetur vel voluptas. Culpa doloremque et eum, eveniet ex
                                expedita
                                laborum libero mollitia non obcaecati odio officiis, perspiciatis recusandae saepe
                                soluta. Aut dolorum
                                exercitationem fugiat inventore libero! Aspernatur dolore dolorem ducimus, earum,
                                inventore ipsum itaque
                                maiores nobis praesentium repudiandae totam veritatis voluptates. A aliquid architecto
                                blanditiis,
                                dolorem enim et ex excepturi laboriosam nam nisi odit praesentium repudiandae similique
                                tenetur totam
                                veniam voluptate! Expedita, molestias, nesciunt. Ad adipisci architecto asperiores
                                aspernatur blanditiis
                                dolor dolorum earum eius eligendi et ex hic incidunt magnam magni modi molestiae
                                mollitia natus nisi
                                nulla obcaecati quas quibusdam quisquam quos repellendus repudiandae sapiente similique,
                                sunt tenetur
                                ullam veniam! Dolore ipsa porro praesentium voluptatibus. Commodi dolorum et facilis
                                inventore
                                laudantium nihil nisi, odit omnis perferendis quasi quibusdam quod repellendus
                                reprehenderit ut
                                voluptatibus! Aperiam dolor dolore doloribus eius explicabo nemo reiciendis repellat
                                sapiente vitae,
                                voluptatum. Accusamus accusantium architecto autem beatae consequatur culpa deleniti
                                dicta dolor earum
                                eos, ex facilis harum id illo inventore ipsam itaque libero optio quis reiciendis rem
                                rerum saepe sequi
                                tenetur totam vel velit voluptates? Cupiditate facere fuga nisi sequi soluta temporibus
                                vitae
                                voluptates? Ad adipisci consectetur dignissimos dolores eius error ex explicabo facere
                                facilis incidunt
                                inventore iste labore nobis possimus quis quo quos repudiandae sed similique sint,
                                temporibus totam,
                                velit veritatis. Corporis, laborum, sint. Assumenda cumque debitis distinctio dolorum
                                esse eum excepturi
                                expedita hic, illo illum itaque libero, magnam maxime odit pariatur quas quibusdam quos
                                ratione
                                reiciendis repudiandae sapiente ullam voluptatem. Accusamus architecto assumenda atque
                                autem consequatur
                                cupiditate enim facere fuga, necessitatibus nihil praesentium quos, sapiente similique
                                soluta totam?
                                Accusantium beatae cumque ea enim error maxime minima, possimus quibusdam rerum sit
                                soluta tempora vero.
                                Accusamus, accusantium aliquam assumenda at hic ipsa, labore magnam maiores officia
                                possimus quaerat qui
                                repellendus saepe sed sequi. At aut delectus eius in modi nesciunt quaerat sunt vel. Ab
                                animi aut
                                corporis delectus distinctio eligendi eos eum necessitatibus odit pariatur quaerat
                                repellendus, sit,
                                sunt ut vitae? Aliquid animi, aperiam aspernatur at autem beatae consequatur cum
                                delectus deleniti
                                dolores ducimus eum facilis fugit hic id impedit ipsa iusto laborum libero magnam magni
                                minima nesciunt
                                nisi nulla numquam odit omnis optio quaerat quam reiciendis rem repellendus sit
                                suscipit, tempora
                                tenetur totam, voluptatibus. Adipisci doloremque nulla reiciendis rem. A iste iusto vel
                                vitae. Animi
                                aperiam, atque beatae debitis dolores ducimus eaque eius error esse eum eveniet expedita
                                harum illo
                                itaque maiores mollitia nam nihil, nostrum odio, pariatur quasi ratione repudiandae
                                temporibus tenetur
                                unde ut voluptatem? Culpa labore laborum nesciunt, nulla quos temporibus? Ab aspernatur
                                consectetur,
                                consequatur earum eos fuga illum incidunt itaque iusto labore, modi neque nobis odio
                                totam unde ut vero.
                                Deleniti doloribus et ipsum laborum quam unde vero vitae voluptates! Ad, ut?</p>
                        </div>
                    </div>

                </Grid>
                <Grid xs={6}>
                    <div className='Second'>
                        <h3 className='Second-title'>TITLE</h3>
                        <p className='Second-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque
                            blanditiis commodi dolores error
                            facilis illum in, ipsum iusto, laborum, nihil odit officia possimus sunt vero. Amet
                            blanditiis debitis
                            ducimus, eos eveniet fuga fugiat hic illo ipsa laudantium minus molestiae molestias nulla
                            officiis
                            quaerat, quisquam saepe sint, sunt veniam voluptas?</p>
                    </div>

                </Grid>
                <Grid xs={6}>
                    <div className='Third'>
                        <h3 className='Third-title'>TITLE</h3>
                        <p className='Third-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque
                            blanditiis commodi dolores error
                            facilis illum in, ipsum iusto, laborum, nihil odit officia possimus sunt vero. Amet
                            blanditiis debitis
                            ducimus, eos eveniet fuga fugiat hic illo ipsa laudantium minus molestiae molestias nulla
                            officiis
                            quaerat, quisquam saepe sint, sunt veniam voluptas blanditiis debitis
                            ducimus, eos eveniet fuga fugiat hic illo ipsa laudantium minus molestiae molestias nulla
                            officiis
                            quaerat, quisquam saepe sint, sunt?</p>

                    </div>

                </Grid>
                <Grid xs={12}>
                    <div className='Fourth'>
                        <h3 className='Fourth-title'>OUR TEAM</h3>
                        <SliderAbout/>
                    </div>

                </Grid>
            </Grid>
        </Box>
    );
}