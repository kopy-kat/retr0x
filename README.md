# RPGF - Retr0x

Retr0x is an integral pillar of an entirely new regenerative crypto-economic paradigm which will aim to optimally distribute funds to the projects which add the most value to humanity. We have built a fully transparent and on-chain platform deployed on Optimism for retroactive public goods funding, as well as future streaming of funds with quadratic voting logic and data visualization for funds which have already been disbursed. Public goods are by definition non-excludable and non-rivalrous and are often chronically underfunded and supported. The examples are vast and include things like open software, information, fresh air, privacy or foundational research. These are used an underappreciated by many. It is often difficult to predict which sort of public good projects will amass the largest amount of positive externality and should be funded the most and thus a new funding framework was recently proposed by Vitalik (https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c). The simple idea is that it is in fact much easier to designate what has been useful in the past.

Following this particular train of thought, we have created an app where public good funding rounds with a particular thematic focus can be initiated by an initial funder. The funder decideds the particular type of good which should be funded and any other funders can add funds to a particular round if they additionally support it. This initializes a three week nomination period where individuals can submit a nomination for a particular public good, with a required stake to prevent spam. The nomination information is stored on IPFS and put on chain. Full transparency ensures that nefarious nominations can be flagged. The round initiator also provides a list of "badge-holders" which are designated experts in this particular field and who hold voting rights for all nominated projects. In future, more sophisticated mechanisms for designating badge holders based on expertise, knowledge and experience are required and will require more research and careful design. Voting is implemented quadratically to avoid potential conflicts of interest and the accruing too much voting weight for particular nominations. We have opted for this particular voting logic but changing the voting scheme should be trivial and we would like to see the implentation and evaluation of alternative voting schemes.

Once votes have passed funds are automically disbursed to the addresses specified in the nominations. Funders and those being funded don't need to trust each other; everything is recorded on chain. Funds are disbursed in proportion to votes received and the stake for nominations is sent back to succesfully funded nominations only. Half of the funds are sent immediately as retroactive public goods funds and half of them are streamed through superfluid. This aims to optimally incentivize behaviour and steer the future development of public goods in the right direction. Projects are rewarded for their past provision of value and also receive a small continuous stream of income to optimally support future provision of value. Immediate unlocking of all funds would have the same effect as traditional funding where projects receive large amounts of upfront funding whilst it is difficult to predict whether this will continue to be useful in future and whether funds will be used optimally. There exists the possibility to design a process to even stop the streaming of funding when certan conditions are not met. This aligns particularly with the new retrogenerative crypto-economic paradigm coined in "Greenpilled". 

We also provide tools to visualize the disbursement of funds from past rounds and all data can actually be downloaded from our dashboard. This allows people to see precisely where funds have gone and evaluate previous funding rounds. Our aim is full transparency and optimal allocation of retroactive funds in proportion to the value of the public good provided by nominated projects. Building Retr0x portably and transparently unlocks this possibility and broadens the scope of retroactive public good funding. Our application can also be deployed for other funding use cases.


# Technical Documentation

To deploy contract:
cd retro
1. yarn hardhat deploy
2. yarn hardhat run scripts/sample-scripts.js --network optimism-kovan
