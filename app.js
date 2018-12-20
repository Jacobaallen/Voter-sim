let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];

class Person {
  constructor(name){
   this.name = name;
  }
}
class Voter extends Person{
  constructor(name, ideology){
    super(name);
    this.ideology = ideology;
  }
}
class Candidate extends Person{
  constructor(name, party, votes = 0){
    super(name);
    this.party = party;
    this.voters = votes;
  }
}

$(document).ready(function() {

  $('#voter-form button').on('click',function(event) {
      event.preventDefault()
      let name = $('#voter-name').val()
      let ideology = $('#voter-ideology').val()
      console.log(ideology)
      let newVoter = new Voter(name, ideology);
      voters.push(newVoter)
      $("#voter-list ul").append(`<li class="list-group-item"> ${newVoter.name}, ${newVoter.ideology}</li>`);
  })
  $('#candidate-form button').on('click',function(event) {
    event.preventDefault()
    let name = $('#candidate-name').val()
    let party = $('#candidate-party').val()
    let newCandidate = new Candidate(name, party);
    $("#candidate-list ul").append(`<li class="list-group-item"> ${newCandidate.name}, ${newCandidate.party}</li>`);
  })

  $('#vote-btn-div button').on('click', function(event) {
    event.preventDefault()
    vote()
  })

  function vote() {
    console.log("voting")
    let dem = []
    let ind = []
    let rep = []
    let random = Math.ceil(Math.random() * 10)
    console.log(random)
    voters.forEach((voter) => {
      if (voter.ideology === 'Liberal') {
        if (random <= 6) {
          dem.push(voter)
        }
        else if (random >= 7 && random <= 8) {
          ind.push(voter)
        }
        else {
          rep.push(voter)
        }
      } else if(voter.ideology === 'Neutral'){
          if (random <=5) {
            ind.push(voter)
          }
          else if(random >= 7.5 && random <=8.5) {
            dem.push(voter)
          }
          else {
            rep.push(voter)
          }
        } else if(voter.ideology === 'Conservative'){
          if (random <= 6) {
            rep.push(voter)
          }
          else if (random >= 7 && random <= 8) {
            ind.push(voter)
          }
          else {
            dem.push(voter)
          }
        }
        else {
        console.log('Your vote does not count.')
      }
    })
    let repVoters = rep.length;
    let demVoters = dem.length;
    let indVoters = ind.length;



   voters.push("repVoters", "demVoters", "indVoters");
  if (repVoters > demVoters && repVoters > indVoters) {
    alert("The Republican won by " + repVoters + " votes.")
  } else if( demVoters > repVoters && demVoters > indVoters) {
    alert("The Democrat won by " + demVoters + " votes")
  } else {
    alert("The Independent won by " + indVoters + " votes.")
  }

  }
})
