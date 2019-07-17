``` var indexGoal = this.filterSelected.indexOf(healthGoal);
            if (healthGoal === "all") {
                this.filterSelected = ["all"];
            } else {
                if (this.filterSelected.indexOf("all") > -1)
                    this.filterSelected = [];
                if (indexGoal > -1) { // if have goal before
                    this.filterSelected.splice(indexGoal, 1); // delete
                    if (this.filterSelected.length === 0) // if blank change to all
                        this.filterSelected = ["all"];
                } else { // if not include before
                    this.filterSelected.push(healthGoal);
                }
            } ```
