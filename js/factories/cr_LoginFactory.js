angular.module('cr_Customify')
    .factory('cr_LoginFactory', [function () {
        var self = this;

        self.login_status = false;

        self.user = {
            ig: "",
            name: "",
            sex: "women",
            avatar: "./img/000001/avatar.jpg",
            age: "25",
            city: "San Francisco",
            state: "California",
            country: "United States",
            premium: "true",
            language: "en",
            currency_symbol: "£",
            user_key: "",
            notifications: {
                count: "3",
                items: [
                    {
                        title: "Notification_1",
                        url: "",
                        type: "news",
                        read: "true",
                        text: "The Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavour to grow. Be specific about your reader’s choice, adapt to your readers, and focus on your readers’ needs. It  should not be an ego-maniacal or self-serving effort, it should focus on the welfare of both the concerned sides.The Project PlanAn inclusive, positive grant proposal is feasible only when an appropriate, strategic, and comprehensible project plan has been outlined. A proposal should employ facts, not non-directive opinions, to persuade the reader. It should demonstrate possible outcomes, and explain how you are planning to accomplish the desired goals.  As a proposal writer, you need to precisely explain how your project design would induce the outcome that your team is striving at, and if the pro virtuosos from your respective field would approve of your business proposal plan.Make sure that your report (a proposal is analogous to a report, in most ways) includes a brief description of your product or service. You may also include a market research, and describe the experience of your key players to help your proposal sound more veritable and complete. At the same time, do not forget to include safety plans alongside – this is merely intended to reveal how prepared you are for the project, and to enhance the authenticity factor for your proposal.If possible, sketch out a small-scale model of your proposal, evaluate the model, remodify should you need to, and extrapolate how the detailed project will emerge. Be careful in writing (it should be as clearly as possible), editing, and designing your proposal. For any proposal to be effective, it is important to have it thoroughly re-assessed and to make changes, wherever necessary. Your proposal should be organized, convey its purpose, and focus on the positive outcome, unaccompanied by any unnecessary words.ResourcesA lamp post helps evade the shade, and research work is no different when it comes to executing a proposal plan. Your proposal should illustrate all possible resources that it is relying upon, and the critical measures it would take as part of its accomplishment. Research your company as well, to gain a better insight into its modus operandi, and gather case studies or relevant market studies to support your proposal. Your proposal should convince the reader, for how endowing it with a  consent will be valuable at the end."
                    },
                    {
                        title: "Notification_2",
                        url: "",
                        type: "news",
                        read: "false",
                        text: "The Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavo The Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavoThe Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavo"
                    },
                    {
                        title: "Notification_3",
                        url: "",
                        type: "share",
                        read: "false",
                        text: "The Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavoThe Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavoThe Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavoThe Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavoThe Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavoThe Purpose A part of your goals, the ‘purpose’ is extremely crucial when you begin writing a proposal. It is imperative that your proposal explains how accomplishing a certain milestone or a progressive step  would help your professional business or individualistic endeavo"
                    }
                ]
            },
            resent: [
                {id: "", title: "T-shirt", mini_img: "./img/000001/486.jpg"},
                {id: "", title: "Polo", mini_img: "./img/000001/496.jpg"}
            ],
            upload: [
                {id: "", title: "", img: ""},
                {id: "", title: "", img: ""}
            ],
            basket: {
                all_price: "0",
                count_item: "12",
                count: "",
                items: []
            }
        };

        return self;
    }]);