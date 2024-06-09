export class MessageItem {
    constructor(
        public id : number, 
        public countryCode : string,
        public title : string,
        public message : string,
        public startDate : Date,
        public endDate : Date,
        public onEditMode : boolean = false
    ) { }

    getStringStartDate() : string {
        let localStringDate = this.startDate.toISOString();
        localStringDate = localStringDate.substring(0, localStringDate.length - 1);
        return localStringDate
    }

    getStringEndDate() : string {
        let localStringDate = this.endDate.toISOString();
        localStringDate = localStringDate.substring(0, localStringDate.length - 1);
        return localStringDate
    }
}